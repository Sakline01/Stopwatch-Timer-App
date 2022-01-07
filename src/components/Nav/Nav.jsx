import React from 'react';
import style from './nav.module.css';
const Nav = ({ handlCick }) => {
    return (
        <div className={style.Nav} >
            <div onClick={() => handlCick(true)}>Stopwatch</div>
            <div onClick={() => handlCick(false)}>Timer</div>
        </div>
    );
}

export default Nav;
