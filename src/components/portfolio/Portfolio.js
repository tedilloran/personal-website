import React from 'react';

import PortfolioCard from './PortfolioCard';

class Projects extends React.Component {
  render() {
    return (
      <section className='section-portfolio'>
        <div className='u-center-text u-margin-bottom-medium'>
          <h2 className='heading-secondary'>Portfolio</h2>
        </div>
        <div className='card-group'>
          <PortfolioCard
            name='Steam Web Scraper'
            img={process.env.PUBLIC_URL + '/assets/pictures/steam.png'}
            git='https://github.com/tedilloran/Steam-Web-Scraper'>
            Web scraper for obtaining game information from Steam store.
          </PortfolioCard>
          <PortfolioCard
            name='Tetris Clone'
            img={process.env.PUBLIC_URL + '/assets/pictures/tetris.png'}
            git='https://github.com/tedilloran/tetrisJS'>
            Javascript implementation of Tetris rendered within a browser.
          </PortfolioCard>
          <PortfolioCard
            name='Robot Controller'
            img={process.env.PUBLIC_URL + '/assets/pictures/robot.png'}
            git='https://github.com/tedilloran/Robotic-Arm-Actuator'>
            Robotic joint controller for simulated movement on 2D plane.
          </PortfolioCard>
          <PortfolioCard
            name='Shell Prompt'
            img={process.env.PUBLIC_URL + '/assets/pictures/terminal.png'}
            git='https://github.com/tedilloran/Shell'>
            Fully functional multi-threaded shell with full I/O redirection.
          </PortfolioCard>
        </div>
      </section>
    );
  }
}

export default Projects;
