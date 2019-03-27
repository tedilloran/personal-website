import React from 'react';
import { Image, Header, Button, Icon } from 'semantic-ui-react';

import '../styles/header.css';

class MyHeader extends React.Component {
  render() {
    const vidPath = process.env.PUBLIC_URL + '/assets/videos/video.mp4';

    return (
      <div id='home'>
        <div id='video-overlay'>
          <Image
            id='profile-picture'
            circular
            centered
            size={'small'}
            src='https://cdn.vox-cdn.com/thumbor/0A5RYJ7J5eW5wepSfIBR3KVmoSg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13648705/olli_the_polite_cat.jpg'
          />
          <div id='video-heading'>
            <Header as='h1' textAlign='center' inverted style={{ animation: 'moveInRight 1s ease-out' }}>
              TRENT EDILLORAN
            </Header>
            <Header as='h1' textAlign='center' inverted style={{ animation: 'moveInLeft 1s ease-out' }}>
              QUALITY ASSURANCE INTERN
            </Header>
          </div>
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
        <div id='video-container'>
          <video playsInline loop autoPlay muted>
            <source src={vidPath} type='video/mp4' />
            <source src={vidPath} type='video/webm' />
          </video>
        </div>
      </div>
    );
  }
}

export default MyHeader;
