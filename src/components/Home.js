import React from 'react';
import Portfolio from './portfolio/Portfolio';
import Introduction from './introduction/Introduction';

import '../css/style.css';

const Home = () => {
  return (
    <main>
      <Introduction />
      <Portfolio />
    </main>
  );
};

export default Home;
