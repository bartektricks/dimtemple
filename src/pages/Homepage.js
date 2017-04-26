import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Homepage extends Component {
  render() {
    return (
      <div className="dt-page dt-home-page">
        {/* React Meta for Users */}
        <Helmet
          title='Temple of Dimensions Homepage'
          meta={[
            { name: 'description', content: 'sth' },
            { name: 'keywords', content: 'sth' },
            { name: 'twitter:title', content: 'sth' },
            { name: 'twitter:description', content: 'sth' },
            { property: 'og:title', content: 'sth' },
            { property: 'og:sitename', content: 'sth' },
            { property: 'og:description', content: 'sth' },
          ]}
        />
        Homepage
      </div>
    );
  }
}

export default Homepage;
