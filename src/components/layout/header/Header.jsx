import React, { useState, useEffect } from 'react';
import { Navbar, Sidebar, HorizontalNav } from '../../utils';
import "./Header.scss";

/* Header Component is to contain the navigation components: */

    const Header = (props) => {

        const [isOpen, setIsOpen] = useState(false);
        const [ isDesktop, setIsDesktop ] = useState(window.innerWidth > 1000);

        const navToggle = () => {
            setIsOpen(!isOpen);
        };

        const updateComponentView = () => {
            setIsDesktop(window.innerWidth > 1000);
        };

        useEffect ( () => {
            window.addEventListener("resize", updateComponentView);
            return () => window.removeEventListener("resize", updateComponentView);
        }, []);


        return (
            <header className="header-wrapper">
                   
                   {isDesktop ? 
                        (<Navbar isOpen={isOpen} navToggle={navToggle} />)
                    
                        :

                        (<HorizontalNav isOpen={isOpen} navToggle={navToggle} />)
                    } 
                   
                  {/*  <Navbar isOpen={isOpen} navToggle={navToggle} />
                    <HorizontalNav isOpen={isOpen} navToggle={navToggle} /> */}

                    <Sidebar isOpen={isOpen} navToggle={navToggle} />

            </header>
        );
    };

    export default Header;