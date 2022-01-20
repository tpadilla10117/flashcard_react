import React from 'react';
import classnames from 'classnames';
import styles from './LinkButton.module.scss';

const LinkButton = ({text, type, wide, link}) => {
  
    const classNames = classnames(styles.Button, {[styles[type]]: type, [styles.Wide]: wide});
  
    return (
      <>
      <a className={classNames} href={link}>
          {text}
      </a>
      </>
    )
  }
  
export default LinkButton;