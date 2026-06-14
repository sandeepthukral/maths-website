#!/usr/bin/env node
/**
 * Scans the data/ folder and writes manifest.json.
 * Run with: node generate_manifest.js
 *
 * Folder structure expected:
 *   data/
 *     <grade-slug>/
 *       meta.json          { "title", "color" }
 *       <topic-slug>/
 *         meta.json        { "title", "description", "color" }
 *         set-01.js
 *         set-02.js
 *         ...
 */

const fs   = require('fs');
const path = require('path');

const DATA_DIR = 'data';
const OUTPUT   = 'manifest.json';

function extractSetInfo(filepath) {
  const content = fs.readFileSync(filepath, 'utf8');

  const titleMatch = content.match(/title:\s*['"](.+?)['"]/);
  const title = titleMatch ? titleMatch[1] : path.basename(filepath, '.js');

  const questionCount = (content.match(/\bid:\s*\d+/g) || []).length;

  const seen = new Set();
  const categories = [];
  for (const [, cat] of content.matchAll(/category:\s*['"]([^'"]+)['"]/g)) {
    if (!seen.has(cat)) { seen.add(cat); categories.push(cat); }
  }

  return { title, questionCount, categories };
}

if (!fs.existsSync(DATA_DIR) || !fs.statSync(DATA_DIR).isDirectory()) {
  console.error(`Error: '${DATA_DIR}/' not found. Run from the project root.`);
  process.exit(1);
}

const grades = [];

for (const gradeSlug of fs.readdirSync(DATA_DIR).sort()) {
  const gradeDir = path.join(DATA_DIR, gradeSlug);
  if (!fs.statSync(gradeDir).isDirectory()) continue;

  const gradeMeta = path.join(gradeDir, 'meta.json');
  if (!fs.existsSync(gradeMeta)) {
    console.warn(`  Warning: no meta.json in '${gradeDir}' — skipping`);
    continue;
  }

  const grade = JSON.parse(fs.readFileSync(gradeMeta, 'utf8'));
  const topics = [];

  for (const topicSlug of fs.readdirSync(gradeDir).sort()) {
    const topicDir = path.join(gradeDir, topicSlug);
    if (!fs.statSync(topicDir).isDirectory()) continue;

    const topicMeta = path.join(topicDir, 'meta.json');
    if (!fs.existsSync(topicMeta)) continue;

    const meta = JSON.parse(fs.readFileSync(topicMeta, 'utf8'));

    const sets = fs.readdirSync(topicDir)
      .filter(f => f.startsWith('set-') && f.endsWith('.js'))
      .sort()
      .map(filename => {
        const setId = filename.replace(/\.js$/, '');
        const info  = extractSetInfo(path.join(topicDir, filename));
        return {
          id:   setId,
          file: `${DATA_DIR}/${gradeSlug}/${topicSlug}/${filename}`,
          ...info
        };
      });

    topics.push({ slug: topicSlug, ...meta, sets });
    console.log(`  ${gradeSlug}/${topicSlug}: ${sets.length} set(s)`);
  }

  grades.push({ slug: gradeSlug, ...grade, topics });
}

fs.writeFileSync(OUTPUT, JSON.stringify({ grades }, null, 2), 'utf8');
console.log(`\nWrote ${OUTPUT}  (${grades.length} grade(s))`);
