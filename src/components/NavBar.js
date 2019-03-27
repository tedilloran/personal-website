import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

class NavBar extends React.Component {
  render() {
    return (
      <Menu secondary style={{ position: 'fixed', zIndex: '100', margin: '0px' }}>
        <Menu.Item>
          <Link to='/'>
            <Icon inverted size={'big'} name={'hand spock outline'} />
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavBar;
