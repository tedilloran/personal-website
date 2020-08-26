import React from 'react';
import UnderConstruction from './components/UnderConstruction';

import './css/style.css';

class App extends React.Component {
  render() {
    return (
      <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
        <UnderConstruction/>
      </div>
    );
  }
}

export default App;
