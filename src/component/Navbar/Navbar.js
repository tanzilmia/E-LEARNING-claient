import React,{useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { mycontext } from '../../contextApi/UserContext';
import './Navbar.css'
const Navbars = () => {
  
  const {logout} = useContext(mycontext)


  const handleLogout = ()=>{
    logout()
    .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">E-Learning</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navbar_menu">
              <Link to = '/'>Course</Link>
              <Link to = '/blog'>Blog</Link>
              <Link to = '/faq'>FAQ</Link>
              <Link to = '/login'>Login</Link>
              <Link onClick={handleLogout}>Logout</Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navbars;