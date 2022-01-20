import React from 'react';
import styles from './BulletList.module.scss';
import classnames from 'classnames';

const BulletList = ( {listItems, listStyle}) => {

    const classNames = classnames(styles.List, styles[listStyle], styles.listItems )

    return (
        <ul className={classNames}>
            {listItems}
        </ul>
    );
};

export default BulletList;