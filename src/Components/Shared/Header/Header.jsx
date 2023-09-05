/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
import { UseContext } from '../../../Context/Context';

const Header = () => {
    const {logOut, userInformation} = useContext(UseContext);
    const signOut = () => {
        logOut()
        .then(()=>{}).catch(error => console.log(error))
    }
    const toggle = () => {
        const details = document.getElementById('details');
        if(details.style.display == 'block'){
            details.style.display = 'none';
        } else {
            details.style.display = 'block';
        }
    }
    return (
        <header>
            <Navbar expand="lg" className="bg-white">
                <Container>
                    <Navbar.Brand><Link to='/'><img className='logo' src={logo} alt="konado" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='nav-link pb-4 pt-4 fw-semibold' to='/'>Home</Link>
                            <Link className='nav-link pb-4 pt-4 fw-semibold' to='/about'>About</Link>
                            <Link className='nav-link pb-4 pt-4 fw-semibold' to='/shop'>Shop</Link>
                            <Link className='nav-link pb-4 pt-4 fw-semibold' to='/cart'>Cart</Link>

                            {
                                userInformation?.uid ? 
                                <>
                                    <div className='userDetails d-flex justify-content-center align-items-center'>
                                        <p onClick={toggle} className='fw-semibold pt-3 ps-5 pointer'>{userInformation.displayName}</p> <div className='userIcon'>{
                                            userInformation?.photoURL && <img onClick={toggle} src={userInformation.photoURL} alt={userInformation.displayName} />
                                        }</div>

                                        <div className="details-account" id='details'>
                                            {
                                                userInformation?.email && <p>Email: {userInformation.email}</p>
                                            }
                                            <button className='btn btn-sm btn-danger' onClick={signOut}>Log Out</button>
                                        </div>
                                    </div>
                                </>
                                :
                                <Link className='nav-link ps-5 pb-3 pt-4 fw-semibold' to='/register'>Account</Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;