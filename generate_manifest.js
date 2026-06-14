#!/usr/bin/env node
/**
 * Scans the data/ folder and writes manifest.json.
 * Run with: node generate_manifest.js
 *
 * Folder structure expected:
 *   data/
 *     <topic-slug>/
 *       meta.json          { "title", "description", "color" }
 *       set-01.js
 *       set-02.js
 *       ...
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

const topics = [];

for (const topicSlug of fs.readdirSync(DATA_DIR).sort()) {
  const topicDir = path.join(DATA_DIR, topicSlug);
  if (!fs.statSync(topicDir).isDirectory()) continue;

  const metaPath = path.join(topicDir, 'meta.json');
  if (!fs.existsSync(metaPath)) {
    console.warn(`  Warning: no meta.json in '${topicDir}' — skipping`);
    continue;
  }

  const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));

  const sets = fs.readdirSync(topicDir)
    .filter(f => f.startsWith('set-') && f.endsWith('.js'))
    .sort()
    .map(filename => {
      const setId = filename.replace(/\.js$/, '');
      const info  = extractSetInfo(path.join(topicDir, filename));
      return { id: setId, file: `${DATA_DIR}/${topicSlug}/${filename}`, ...info };
    });

  topics.push({ slug: topicSlug, ...meta, sets });
  console.log(`  ${topicSlug}: ${sets.length} set(s)`);
}

fs.writeFileSync(OUTPUT, JSON.stringify({ topics }, null, 2), 'utf8');
console.log(`\nWrote ${OUTPUT}  (${topics.length} topic(s))`);
