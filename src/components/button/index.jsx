import React from 'react';
import style from './style.module.scss';

const Button = (props) => {
    return (
        <div className={[style.button, props.sending ? style.disabled : ''].join(' ')} onClick={props.onClick}>
            {props.sending ? 'Slanje...' : 'Prijavi se'}
        </div>
    );
};

export default Button;