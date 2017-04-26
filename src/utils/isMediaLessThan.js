const convertMediaToNumber = require('./convertMediaToNumber');

function isMediaLessThan(media, other) {
  return convertMediaToNumber(other) < convertMediaToNumber(media);
}

module.exports = isMediaLessThan;
