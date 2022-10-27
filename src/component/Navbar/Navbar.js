import React,{useContext,useState} from 'react';
import Container from 'react-bootstrap/Container';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { mycontext } from '../../contextApi/UserContext';
import { FiLogOut } from 'react-icons/fi';
import { FaUserAlt } from 'react-icons/fa';
import { BsSunFill,BsMoonStarsFill } from 'react-icons/bs';

import './Navbar.css'
import logo from '../../assest/logo.png'
const Navbars = () => {


  
  const [state, setstate] = useState(false)
  const {logout,user} = useContext(mycontext)
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {user?.displayName}
    </Tooltip>
  );

  const handleLogout = ()=>{
    logout()
    .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  const handelMood = () =>{
    setstate(!state)
  }
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Link className='brandname' to = '/'> <img className='logo' src= {logo} alt="" /> E-Learning</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navbar_menu">
              <Link to = '/'>Course</Link>
              <Link to = '/blog'>Blog</Link>
              <Link to = '/faq'>FAQ</Link>
              {
                user?.uid ?
                <>
                {
                  user?.photoURL?
                     
                  <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <div className='user_img'><img className='user_img' src= {user.photoURL} alt="" /></div>
                </OverlayTrigger>

                   
                  :
                  <FaUserAlt className='user_img'/>
                }
                
                <Link onClick={handleLogout}> <FiLogOut/>  </Link>

                </>
                :
                <>
                 <Link to = '/login'>Login</Link>
                </>

              }
              
              
              <Link  onClick={handelMood}>

                {state ? <BsSunFill/> : <BsMoonStarsFill/> }

              </Link>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navbars;

// 