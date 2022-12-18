import React from 'react';
import style from './style.module.scss';

const Button = (props) => {
    return (
        <div className={style.button} onClick={props.onClick}>
            Prijavi se
        </div>
    );
};

export default Button;