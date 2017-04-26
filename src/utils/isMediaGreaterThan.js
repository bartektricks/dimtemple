const convertMediaToNumber = require('./convertMediaToNumber');

function isMediaGreaterThan(media, other) {
  return convertMediaToNumber(other) > convertMediaToNumber(media);
}

module.exports = isMediaGreaterThan;
