import React from 'react';

import { Header, Grid, Button, Icon } from 'semantic-ui-react';
import '../styles/contactButtons.css';

class ContactButtons extends React.Component {
  render() {
    return (
      <div style={{ paddingTop: '20px' }}>
        <Header as='h2' textAlign='center' style={{ textShadow: '2px 2px rgba(66, 65, 65, 0.507)' }}>
          CONTACT
        </Header>
        <Grid id='button-group' stackable columns={3}>
          <Grid.Row>
            <Grid.Column>
              <div style={{ textAlign: 'center' }}>
                <Button fluid color={'blue'} size={'huge'} href='mailto:trent.edilloran@gmail.com'>
                  <Icon name='envelope' />
                  EMAIL
                </Button>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div style={{ textAlign: 'center' }}>
                <Button
                  fluid
                  color={'blue'}
                  size={'huge'}
                  href='http://www.linkedin.com/in/trent-edilloran/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Icon name='linkedin' />
                  LINKEDIN
                </Button>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div style={{ textAlign: 'center' }}>
                <Button
                  fluid
                  color={'blue'}
                  size={'huge'}
                  href='http://www.github.com/tedilloran'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Icon name='github' />
                  GITHUB
                </Button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default ContactButtons;
