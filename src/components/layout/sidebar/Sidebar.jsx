/* This component renders a Sidebar / overlay when hamburger icon clicked (mobile view): */
    import React from "react";
    import { NavLink } from 'react-router-dom';
    import { CSSTransition } from "react-transition-group";
    import { NavbarData } from "../../../utils/seed";
    import closeIcon from '../../../assets/icons/closeIcon.svg';
    import { FaTwitter, FaLinkedin, FaBehance, FaGithub } from 'react-icons/fa';
    import './Sidebar.scss';

        const Sidebar = (props) => {

            const { isOpen, navToggle } = props;

            return (
                <CSSTransition in={isOpen} timeout={300} unmountOnExit onEnter={ () => navToggle} onExited={ () => navToggle} classNames="sideBarTransition">
                    <div className="sidebar-container" isOpen={isOpen}>
                        <div className="sidebar-icon" onClick={navToggle}>
                            <img className="close-icon" src={closeIcon} alt="" />
                        </div>
                        <div className="sidebar-wrapper">
                            <ul className="sidebar-menu">
                                <div className="sidebar-link" onClick={navToggle}>

                                {NavbarData.map( (item, index) => {
                                    return (
                                        <NavLink to={item.path} exact activeClassName="active" className="nav-item" style={ {textDecoration: "none"} } key={index}>
                                            <li key={index} className={item.title}>
                                                <span>{item.title}</span>
                                            </li>
                                        </NavLink>
                                    )
                                })}

                                </div>
                            </ul>
                        </div>
    {/* TODO: Need to put social media inside the sidebar component to get rid of that extra padding */}
                        <section className='socialmedia'>
                        <div className='socialmedia-wrap'>
                            
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

                </CSSTransition>
            );
        };

        export default Sidebar;

        