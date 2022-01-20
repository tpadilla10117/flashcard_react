import React from 'react';
import styles from './LinkBlock.module.scss';

const LinkBlock = ( {children}) => {
    return (
        <div className={styles.LinkBlock}>
            {children}
        </div>
    );
};

export default LinkBlock;