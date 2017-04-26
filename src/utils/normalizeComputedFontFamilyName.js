const trim = require('lodash/trim');

function normalizeComputedFontFamilyName(fontName) {
  return trim(fontName, '"');
}

module.exports = normalizeComputedFontFamilyName;
