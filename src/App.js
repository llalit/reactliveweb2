import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Button, Nav, Navbar, NavDropdown, FormControl, Form} from 'react-bootstrap';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Reactjs from './Components/Reactjs';
import Nodejs from './Components/Nodejs';
import AboutMe from './Components/AboutMe';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
function NavBar() {
  return (
    <Router>
      <div>
         <Navbar  bg="light" expand="lg">
            <Navbar.Brand>Technical Lalit</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link className="navlink"><Link exact to="/" >Home</Link></Nav.Link>
                  <Nav.Link ><Link exact to="/About">About</Link></Nav.Link>
                  <Nav.Link ><Link exact to="/Contact">Contact</Link></Nav.Link>
                  <Nav.Link ><Link exact to="/ReactJs">Reactjs</Link></Nav.Link>
                  <Nav.Link ><Link exact to="/NodeJs">NodeJs</Link></Nav.Link>
                  <Nav.Link ><Link exact to="/AboutMe">About Me</Link></Nav.Link>


                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
</Navbar>
      </div>


      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/ReactJs" component={Reactjs} />
          <Route exact path="/Nodejs" component={Nodejs} />
          <Route exact path="/AboutMe" component={AboutMe} />
      </Switch>

    </Router>
          )
    }

export default NavBar;