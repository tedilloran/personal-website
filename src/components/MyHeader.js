import React from 'react';
import { Image, Header, Button, Icon } from 'semantic-ui-react';

import '../styles/header.css';

class MyHeader extends React.Component {
  render() {
    const vidPath = process.env.PUBLIC_URL + '/assets/videos/video1.mp4';
    const profilePath = process.env.PUBLIC_URL + '/assets/pictures/profile.jpg';

    return (
      <section id='header'>
        <div id='video-overlay'>
          <div id='profile-picture'>
            <Image circular centered size={'small'} src={profilePath} />
          </div>
          <div id='video-heading'>
            <Header as='div' textAlign='center' inverted style={{ animation: 'moveInRight 1s ease-out' }}>
              <span id='name'>TRENT EDILLORAN</span>
            </Header>
            <Header as='div' textAlign='center' inverted style={{ animation: 'moveInLeft 1s ease-out' }}>
              <span id='title'>QUALITY ASSURANCE INTERN</span>
            </Header>
            <div id='resume-button'>
              <Button
                color={'blue'}
                size={'huge'}
                href={process.env.PUBLIC_URL + '/assets/documents/resume.pdf'}
                download>
                <Icon name='file alternate' />
                VIEW RESUMÉ
              </Button>
            </div>
          </div>
          <div id='scroll-arrow'>
            <Icon name='angle double down' inverted size={'huge'} />
          </div>
        </div>
        <div id='video-container'>
          <video playsInline loop autoPlay muted style={{ width: '100%' }}>
            <source src={vidPath} type='video/mp4' />
            <source src={vidPath} type='video/webm' />
          </video>
        </div>
      </section>
    );
  }
}

export default MyHeader;
