import React from 'react';
import styles from './CardWrapper.module.scss';

const CardWrapper = ( { children }) => {
    return (
        <article className={styles.CardWrapper}>
            { children }
        </article>
    );
};

export default CardWrapper;