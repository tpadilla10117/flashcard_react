  /* This is the component for the Vertical Navbar view:  */  

    import React from 'react';
    import './Navbar.scss';
    /* import { CSSTransition } from "react-transition-group"; */
    /* import NavIcon from '../../../assets/icons/navIcon.svg'; */
    import googleMenu from '../../../assets/icons/googlemenu.svg';
    /* import Placeholder from '../../../assets/icons/placeholder.png'; */
    import { NavLink } from 'react-router-dom';
    import { NavbarData } from '../../../utils/seed';

    const Navbar = (props) => {

    const { navToggle } = props;

        return (
          
                <nav className="navbar">
                    <div className="nav-items-container">

                    {/* Logo: */}


                    {NavbarData.map( (item, index) => {
                                        return (
                                            <NavLink to={item.path} exact activeClassName="active" className='main-nav-item' style={ {textDecoration: "none"} } key={index}>
                                                <li key={index} className={item.title} id="navlinks">

                                                {/* TODO: Logic for dropdown menus */}
                                                    {/* <div className='navlinks-dropdown'>
                                                        <span>{item.title}</span>
                                                        <div className='navlinks-dropdown-content'>
                                                            <p>Hello</p>
                                                        </div>
                                                    </div> */}

                                                    <span>{item.title}</span>
                                                </li>
                                            </NavLink>
                                        )
                                    })}
                    </div>
                    <div className="mobile-icon-container">
                        <img className="mobile-icon" src={googleMenu} alt="" onClick={navToggle}/>
                    </div>
                    
                    {/* <img className="nav-logo" src={Placeholder} alt="" /> */}
                                

                </nav>
            
        );
    };

    export default Navbar;