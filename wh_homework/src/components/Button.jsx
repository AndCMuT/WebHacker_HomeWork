import React from 'react';
import styles from './Button.module.css';

function Button() {
    return (
        <button className={`${styles.pushMe_btn}`}>Нажми меня</button>
    )
}

export default Button