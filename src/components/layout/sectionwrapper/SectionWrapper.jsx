import React from 'react';
import styles from './SectionWrapper.module.scss';
import classnames from 'classnames';

const SectionWrapper = ( { content, grayBg, id } ) => {

    const classNames = classnames(styles.SectionWrapper, { [ styles.Graybg ]: grayBg } )

    return (
        <section id={id} className={classNames}>
            { content }
        </section>
    );
};

SectionWrapper.defaultProps = {
    grayBg: false
}

export default SectionWrapper;