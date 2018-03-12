import React from 'react';

export default () => (
  <div
    className="ui inverted vertical footer segment"
    style={{ margin: '60px 0 0', background: '#00B5AD' }}
  >
    <div className="ui center aligned container">
      <h4 className="ui inverted header">&copy; Copyright 2017 | All rights reserved | Blahhh</h4>
      <a href="https://www.facebook.com/">
        <i className="facebook square icon big" />
      </a>
      <a href="https://twitter.com/">
        <i className="twitter square icon big" />
      </a>
      <a href="https://www.linkedin.com/company/c">
        <i className="linkedin square icon big" />
      </a>
    </div>
  </div>
);
