import React from 'react';
import { useHistory } from 'react-router-dom';
import { Footer, UxHeroSection, SectionWrapper, /* CardWrapper, */ ProjectCard } from '../../utils';
import { caseStudies } from '../../../utils/seed';
import './UX.scss';


const Ux = () => {


    let history = useHistory();
    const handleClick = (path) => {
        /* Not targetting the array elements in casestudies correctly
            e.g. history.push('/')
        */
        history.push(path)

    }

    return (
        <main id="ux-section">
            

            <UxHeroSection />
            
            <SectionWrapper 
                id="casestudies"
                content={
                    <div className="casestudies-wrapper">
                        {caseStudies.map(study => {
                            return (
                                <ProjectCard 
                                    key={study.id}
                                    title={study.title}
                                    cardCoverText={study.cardCoverText}
                                    svgImg={study.svgImg}
                                    img={study.img}
                                    onClick={ () => handleClick(study.path) }
                                >
                                    
                                </ProjectCard>

                            )
                        })}

                    </div>
                }

            />
            
        
            <Footer />
        </main>
    );
};

export default Ux;