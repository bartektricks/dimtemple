const MEDIA_PRIRORITY_VALUE = {
  Mobile: 1,
  Small: 2,
  Medium: 3,
  Large: 4,
};

function convertMediaToNumber(media) {
  if (!MEDIA_PRIRORITY_VALUE.hasOwnProperty(media)) {
    return 0;
  }

  return MEDIA_PRIRORITY_VALUE[media];
}

module.exports = convertMediaToNumber;
