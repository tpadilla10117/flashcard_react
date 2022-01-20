import React from 'react';
import { FaTwitter, FaLinkedin, FaBehance, FaGithub } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import './Footer.scss';

function  Footer() {
    return (
        <footer id="footer-container">
            <div className='footer-wrapper'>
                <div className='footerlinks-container'>
                    <div className='footerlinks-wrapper'>
                        <div className='footerlink-items'>
                            {/* <ul className='footerlink-title'>Home</ul> */}
                                <NavLink className='footerlink' to="/" exact activeClassName="active">
                                    Home
                                </NavLink>                            
                        </div>
                        <div className='footerlink-items'>
                            {/* <ul className='footerlink-title'>Home</ul> */}
                                <NavLink className='footerlink' to="/about" exact activeClassName="active">
                                    About
                                </NavLink>                            
                        </div>
                        <div className='footerlink-items'>
                            {/* <ul className='footerlink-title'>Home</ul> */}
                                <NavLink className='footerlink' to="/developer" exact activeClassName="active">
                                    Developer
                                </NavLink>                            
                        </div>
                        <div className='footerlink-items'>
                            {/* <ul className='footerlink-title'>Home</ul> */}
                                <NavLink className='footerlink' to="/ux" exact activeClassName="active">
                                    UX
                                </NavLink>                            
                        </div>
                        <div className='footerlink-items'>
                            {/* <ul className='footerlink-title'>Home</ul> */}
                                <NavLink className='footerlink' to="/contact" exact activeClassName="active">
                                    Contact
                                </NavLink>                            
                        </div>
                       {/*  <div className='footerlink-items'>
                            
                                <NavLink className='footerlink' to="/resume" exact activeClassName="active">
                                    Resume
                                </NavLink>                            
                        </div> */}

                    </div>

                </div>

                <section className='socialmedia'>
                    <div className='socialmedia-wrap'>
                        <Link className='sociallogo' to='/'>
                            Trin Padilla
                        </Link>
                        <small className='websiterights'>
                            Trin Padilla © {new Date().getFullYear() } All rights reserved.
                        </small>
                        <div className='socialicons'>
                            <a className='socialiconlink' href="https://www.linkedin.com/in/t-p-101/" target="blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </a>
                            <a className='socialiconlink' href="https://twitter.com/tpadilla101" target="blank" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a className='socialiconlink' href="https://github.com/tpadilla10117" target="blank" aria-label="Github">
                                <FaGithub />
                            </a>
                            <a className='socialiconlink' href="https://www.behance.net/tpadilla10117" target="blank" aria-label="Behance">
                                <FaBehance />
                            </a>

                        </div>

                    </div>

                </section>

            </div>
            
        </footer>
    );
};

export default Footer;
