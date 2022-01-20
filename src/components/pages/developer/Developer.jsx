import React from 'react';
import { SectionWrapper, CardWrapper, ProjectCard, ProjectPage, Modal, BulletList, LinkBlock, LinkButton, Footer, VideoSection } from '../../utils';
import { projects } from '../../../utils/seed';

const Developer = (props) => {

    const {
        activeProject,
        setActiveProject,
        modalVisibility,
        setModalVisibility
    
    } = props;

/* Handler for making a modal visible: */
    const handleModalVisibility = (id) => {
        setModalVisibility(!modalVisibility);
        setActiveProject(projects.find(
            project => project.id === id
        )
            
        )
    };

    return (
        <>

            <VideoSection />
        {/* This renders the main project cards on the Landing Page: */}
            <SectionWrapper 
                id="projects"
                content={
                    <CardWrapper>
                        {projects.map( project => {
                            return (
                                <ProjectCard 
                                    loading="lazy"
                                    onClick={ () => 
                                    handleModalVisibility(project.id)}
                                    key={project.id}
                                    title={project.title}
                                    tech={project.tech}
                                    cardCoverText={project.cardCoverText}
                                    svgImg={project.svgImg}
                                    img={project.img}
                                />
                            )
                        })}
                    </CardWrapper>
                }
            />

            <Footer />

        {/* TODO: The modal that appears when clicking a project card: */}
            {modalVisibility && 
                <Modal onModalClose={() => setModalVisibility(false) }>
                    <ProjectPage 
                        title={activeProject.title}
                        tech={activeProject.tech}
                        img={activeProject.img}
                        alt={activeProject.alt}
                        description={activeProject.description}
                        techHighlightsList={
                            <BulletList
                                listItems={
                                    activeProject.techHighlights.map((highlight, i) => {
                                        return <li key={i}>{highlight}</li>
                                        })
                                }
                                listStyle="Modal"
                            />
                        }
                        linkBlock={
                            <LinkBlock>
                                {activeProject.links.map((link, i) => {
                            return <LinkButton key={i} text={link.text} type="PrimaryInverse" link={link.link} />
                        })}
                            </LinkBlock>
                        }
                    />



                </Modal>
            
            }





{/* TODO: make ProjectPage and BulletList components */}



        </>
    );
};

export default Developer;