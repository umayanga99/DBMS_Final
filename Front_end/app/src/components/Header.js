import React, { useContext, useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { ThemeContext } from '../GlobalComponents/ThemeProvider';
import { BiSun, BiMoon, BiCart} from 'react-icons/bi';
import { VscAccount } from 'react-icons/vsc';
import { Link } from "@reach/router";
import { useCart } from "react-use-cart";


const Header = () => {
    const { theme, setThemeMode } = useContext(ThemeContext); 
    const [darkMode, setDarkMode] = useState(theme);

    useEffect(()=>{
        setThemeMode(darkMode);
        console.log(darkMode)
    },[darkMode]);

    const {
        isEmpty,
        totalItems,
    } = useCart();

    return (
        <Navbar collapseOnSelect expand="md"
                variant={darkMode? 'dark':'light'}
                className={darkMode? 'bg-light-black border-bottom': 'bg-light border-bottom'}
                style={{ width: '100%', position: 'fixed', zIndex: 100}}
        >
        <Container>
          <Link to="/home">
            <Navbar.Brand className={darkMode? 'text-dark-primary': 'text-light-primary'}>
                <b>Home</b>
            </Navbar.Brand>
          </Link>
          <Link to="/">
            <Navbar.Brand className={darkMode? 'text-dark-primary': 'text-light-primary'}>
                <b>Log Out</b>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                to="/cart"
                className={`${darkMode? 'text-dark-primary': 'text-light-primary'} d-flex align-items-center`}
              >
                <BiCart size="2rem"/>
                {!isEmpty && <span style={{ position: 'relative', left: '-21px', top: '-18px'}}>{totalItems}</span>}
                <span style={{ marginLeft: !isEmpty ? '-13px': 0}}>&nbsp;Cart</span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;