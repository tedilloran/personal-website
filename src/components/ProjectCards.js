import React from 'react';
import { Header, Card } from 'semantic-ui-react';

import ProjectCard from './ProjectCard';
import '../styles/projectCards.css';

class ProjectCards extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor : '#2185d0',
          paddingTop      : '20px'
        }}>
        <Header as='h2' inverted textAlign='center' style={{ textShadow: '2px 2px rgba(66, 65, 65, 0.507)' }}>
          PORTFOLIO
        </Header>
        <Card.Group stackable centered itemsPerRow={5} id='card-group' style={{ paddingBottom: '20px' }}>
          <ProjectCard
            name='Steam Web Scraper'
            description='Web scraper for obtaining game information from Steam store.'
            imgURL={process.env.PUBLIC_URL + '/assets/pictures/steam.png'}
            githubURL='https://github.com/tedilloran/Steam-Web-Scraper'
          />
          <ProjectCard
            name='Passwd as a Service'
            description='Network fetcher and parser for ‘/etc/passwd’ and ‘/etc/group’ files.'
            imgURL={process.env.PUBLIC_URL + '/assets/pictures/network.png'}
            githubURL='https://github.com/tedilloran/passwdService'
          />
          <ProjectCard
            name='Tetris Clone'
            description='Javascript implementation of Tetris rendered within a browser.'
            imgURL={process.env.PUBLIC_URL + '/assets/pictures/tetris.png'}
            githubURL='https://github.com/tedilloran/tetrisJS'
          />
          <ProjectCard
            name='Robotic Joint Controller'
            description='Robotic joint controller for simulated movement on 2D plane.'
            imgURL={process.env.PUBLIC_URL + '/assets/pictures/robot.png'}
            githubURL='https://github.com/tedilloran/Robotic-Arm-Actuator'
          />
          <ProjectCard
            name='Shell Prompt'
            description='Fully functional multi-threaded shell with full I/O redirection.'
            imgURL={process.env.PUBLIC_URL + '/assets/pictures/terminal.png'}
            githubURL='https://github.com/tedilloran/Shell'
          />
        </Card.Group>
      </div>
    );
  }
}

export default ProjectCards;
