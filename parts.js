/**
 * Puts each sub-question label — (a), (b), … and (i), (ii), … — on its own line.
 * Text inside $…$ / $$…$$ is left untouched. A roman label straight after a letter
 * label, as in "(a) (i)" or "(c)(i)", stays on the same line.
 */
function formatParts(text) {
  const segments = text.split(/(\$\$[\s\S]*?\$\$|\$[^$]*\$)/);
  const LABEL = /(^|[\s)])\((iv|i{1,3}|[a-h])\)(?=[\s(]|$)/g;

  let out = '';
  let seenText = false;      // anything output yet that a label should break away from
  let lastLetter = null;     // most recent letter label, so "(i)" after "(h)" is read as a letter
  let prevWasLetter = false; // previous label was a letter label
  let since = '';            // text since the previous label or display-maths block
  let afterDisplay = false;  // `since` started at a $$…$$ block (already on its own line)

  segments.forEach((seg, idx) => {
    if (idx % 2 === 1) {
      out += seg;
      seenText = true;
      if (seg.startsWith('$$')) { since = ''; afterDisplay = true; prevWasLetter = false; }
      else since += seg;
      return;
    }

    let last = 0;
    seg.replace(LABEL, (match, pre, label, offset) => {
      const start = offset + pre.length;
      const before = seg.slice(last, start);
      const gapEmpty = (since + before).trim() === '';
      const isRoman = label === 'i' ? lastLetter !== 'h' : label.length > 1;

      out += before;
      const keepInline = !seenText && gapEmpty
        || gapEmpty && afterDisplay
        || gapEmpty && isRoman && prevWasLetter;
      if (!keepInline) out += isRoman ? '<br><span class="part-indent"></span>' : '<br>';
      out += `(${label})`;

      if (!isRoman) lastLetter = label;
      prevWasLetter = !isRoman;
      seenText = true;
      since = '';
      afterDisplay = false;
      last = start + label.length + 2;
      return match;
    });

    const rest = seg.slice(last);
    out += rest;
    since += rest;
    if (rest.trim()) seenText = true;
  });

  return out;
}
