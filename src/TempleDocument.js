import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import MediaDetectElement from './utils/MediaDetectElement';
import PropTypes from 'prop-types';

class TempleDocument extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  getChildContext() {
    return {
      currentMedia: this.state.currentMedia,
    };
  }

  onMediaChange = (currentMedia) => {
    this.setState({ currentMedia });
  };

  render() {
    return (
      <div className="main-app">
        <nav className="navigation">
          <Link to="/">
            Homepage
          </Link>
          <Link to="/team">
            Team
          </Link>
        </nav>
        <br />
        Children goes down:
        <br />
        {this.props.children}
        <br />
        Other stuff goes here...
        <MediaDetectElement onMediaChange={this.onMediaChange} />
      </div>
    );
  }
}

TempleDocument.propTypes = {
  location: PropTypes.object,
  children: PropTypes.any,
};

TempleDocument.contextTypes = {
  router: PropTypes.object,
};

TempleDocument.childContextTypes = {
  currentMedia: PropTypes.string,
};

export default TempleDocument;
