import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import SideButtons from './SideButtons';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            {/* <SideButtons /> */}
            <Route path='/' exact component={Home} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
