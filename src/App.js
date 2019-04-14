import React from 'react';

import Home from './components/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
