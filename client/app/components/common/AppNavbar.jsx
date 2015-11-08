import React from 'react';
import {Navbar, NavBrand, Nav, NavItem} from 'react-bootstrap';

class AppNavbar extends React.Component {

  render() {

    return (
      <Navbar inverse fixedTop>
        <NavBrand><a href="#">LEGO</a></NavBrand>
        <Nav>
          <NavItem eventKey={1} href="#">Overview</NavItem>
          <NavItem eventKey={2} href="#">Path</NavItem>
        </Nav>
      </Navbar>
    );

  }
}

export default AppNavbar;