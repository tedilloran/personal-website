import React from 'react';
import { Modal, Card, Image, Button } from 'semantic-ui-react';

import '../styles/projectCard.css';

class ProjectCard extends React.Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Modal
        size={'mini'}
        className='card-modal'
        open={this.state.modalOpen}
        onClose={this.handleClose}
        trigger={
          <Card onClick={this.handleOpen}>
            <Card.Content>
              <Image floated='left' size='mini' circular src={this.props.imgUrl} />
              <Card.Header>{this.props.name}</Card.Header>
              <Card.Description>{this.props.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>Github link</Card.Content>
          </Card>
        }>
        <Modal.Header>{this.props.name}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src={this.props.imgUrl} />
          <Modal.Description>{this.props.description}</Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button basic onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ProjectCard;
