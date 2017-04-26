import React from 'react';
import normalizeComputedFontFamilyName from './normalizeComputedFontFamilyName';

export default class MediaDetectElement extends React.Component {
  static propTypes = {
    onMediaChange: React.PropTypes.func.isRequired,
  };

  componentWillMount() {
    window.addEventListener('resize', this.onWindowResize);
  }

  componentDidMount() {
    this.onWindowResize();
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }


  onWindowResize = () => {
    const mediaDetectDOMNode = this.refs.mediaDetect;
    const computedStyle = getComputedStyle(mediaDetectDOMNode).fontFamily;
    const computedFontFamily = normalizeComputedFontFamilyName(computedStyle);

    if (this.currentMedia === computedFontFamily) {
      return;
    }

    this.currentMedia = computedFontFamily;
    this.props.onMediaChange(computedFontFamily);
  };

  render() {
    return <div className="viewport" ref="mediaDetect" />;
  }
}
