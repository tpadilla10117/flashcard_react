import React, {useState, useEffect} from 'react';
import './HorizontalNav.scss';
import googleMenu from '../../../assets/icons/googlemenu.svg';
import { NavLink } from 'react-router-dom';
import { NavbarData } from '../../../utils/seed';

const HorizontalNav = (props) => {

   const { navToggle } = props;
   const [scrollNav, setScrollNav] = useState(false);

/* Box and transparent are referencing inline style properties: */
   const box = {
       background: /* 'hsla(0,0%,42.7%,.12)' */'#24496A',
       boxShadow: '0 3px 30px rgb(0 0 0 / 10%)',
       backdropFilter: 'blur(5px)'
   };

   const transparent =  {
       background: 'transparent'
   };

   /* TODO: Event listener not firing regardless of logic: */
   const changeNav = () => {
       if (window.scrollY >= 80) {
           setScrollNav(true);
       } else {
           setScrollNav(false);
       }
   };

   console.log(window.scrollY);
   

   useEffect(() => {
       window.addEventListener("scroll", changeNav);

       return () => window.removeEventListener("scroll", changeNav);
   }, [] );


    return (
        <nav className="horizontal-navbar" style={  Object.assign({}, scrollNav ? box : transparent)      }>
            <div className="hnav-items-container">

            {NavbarData.map( (item, index) => {
                                return (
                                    <NavLink to={item.path} exact activeClassName="active" className='hnav-main-nav-item' style={ {textDecoration: "none"} } key={index}>
                                        <li key={index} className={item.title} id="hnav-navlinks">
                                            <span>{item.title}</span>
                                        </li>
                                    </NavLink>
                                )
                            })}
            </div>
            <div className="hnav-mobile-icon-container">
                <img className="hnav-mobile-icon" src={googleMenu} alt="" onClick={navToggle}/>
            </div>
                        

        </nav>
    );
};

export default HorizontalNav;