import React from 'react';
import styles from './ProjectPage.module.scss';

/* What appears on the Landing pg Modal: */

const ProjectPage = ( {title, tech, description, alt, img, techHighlightsList, linkBlock}) => {
    return (
        <main className={styles.ProjectPage}>
            <h1>{title}</h1>
            <h2>{tech}</h2>
            <p>{description}</p>
            <img className={styles.Img} src={img} alt={alt}/>
            <h3>Tech highlights</h3>
            {techHighlightsList}
            {linkBlock}
        </main>
    );
};

export default ProjectPage;