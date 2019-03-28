import React from 'react';
import { Modal, Card, Image, Icon, Button } from 'semantic-ui-react';

import '../styles/projectCard.css';

class ProjectCard extends React.Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Image floated='left' size='mini' circular src={this.props.imgURL} />
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Description>{this.props.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name='chain' />
          <a href={this.props.githubURL}>GitHub Repository</a>
        </Card.Content>
      </Card>
    );
  }
}

export default ProjectCard;
