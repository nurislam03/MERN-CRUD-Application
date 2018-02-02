import React, { Component } from 'react';
import {LinkContainer} from 'react-router-bootstrap';

import {
    Grid,
    Row,
    Col,
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem
} from 'react-bootstrap';

import {
  NavLink,
} from 'reactstrap';

function CustomHeader(props) {

    const navbarInstance = (
        <Navbar inverse collapseOnSelect>

          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">MERN CRUD APP</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Link
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link
              </NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>

            <Nav pullRight>
                <NavItem>
                    <LinkContainer to='/add-item'>
                      <NavLink>Add-Item</NavLink>
                    </LinkContainer>
                </NavItem>

               <NavItem eventKey={1} href="#">
                  Link Right
               </NavItem>
            </Nav>
          </Navbar.Collapse>

      </Navbar>
    );

    return (
        navbarInstance
    );
}


class Header extends Component {

    render() {
      return (
        <div>
            <CustomHeader />
        </div>
      );
    }
}

export default Header;
