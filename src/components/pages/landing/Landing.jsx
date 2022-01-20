import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Landing.scss";
import { LandingOptions } from '../../../utils/seed';

const Landing = () => {

    return (
        <main id="landing-main">
        
            {/* TODO: Style the divs, Routing transitions */}

            <section className="landing-section">
                
                {LandingOptions.map(landingImage => {
                    return (
                        <section id={landingImage.id} key={landingImage.id} className="landing-CardBox">
                            <NavLink to={landingImage.path} exact key={landingImage.id}>
                            
                            <figure className="landing-imgWrapper">
                                <img src={landingImage.img} alt={landingImage.alt} />
                            </figure>
                    
                                <div className="landing-contentBox">
                                    <div className='landing-textWrapper'>
                                        <p className="landing-cardText">{landingImage.title}</p>        
                                    </div>
                                </div>

            
                        </NavLink>
                        </section>
                    )
                })}

            </section>

           


        </main>
    );
};

export default Landing;