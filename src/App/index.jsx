import React from 'react';
import './index.scss';

import { Body, Header, Vcard } from './components';

const App = () => (
  <>
    <svg id="bgShapeLeft" className="bgShape" height="519" width="758">
      {' '}
      <polygon points="0,455,693,352,173,0,92,0,0,71" />
    </svg>
    <svg id="bgShapeRight" className="bgShape" height="536" width="633">
      {' '}
      <polygon points="0,0,633,0,633,536" />
    </svg>
    <div id="wrapper">
      <Header />
      <div className="columnContainer">
        <div className="column1">
          <Vcard />
        </div>
        <div className="column2">
          <Body />
        </div>
      </div>
    </div>
  </>
);

export default App;
