import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

import '../styles/home.css';
import ProjectCards from './ProjectCards';
import MyHeader from './MyHeader';
import ContactButtons from './ContactButtons';

const Home = () => {
  return (
    <div>
      <MyHeader />
      <Segment basic vertical>
        <Header as='h2' textAlign='center' style={{ textShadow: '2px 2px rgba(66, 65, 65, 0.507)', marginTop: '20px' }}>
          INTRODUCTION
        </Header>
        <p id='intro'>
          Computer science graduate with academic experience mainly developing in Java, C, C++, and Python. Experienced
          managing a team of customer service providers as well as handling the sensitive health information of millions
          of healthcare recipients. Currently collaborates between the business, engineering, and social media teams at
          Robot Cache as a quality assurance intern, ensuring an excellent customer experience of a video game
          distribution platform built on the blockchain.
        </p>
      </Segment>
      <Segment basic vertical>
        <ProjectCards />
      </Segment>
      <Segment basic vertical>
        <ContactButtons />
      </Segment>
    </div>
  );
};

export default Home;
