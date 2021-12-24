import React from 'react';
import './hero.css';


export default function Hero(props) {
    return (
        <div className="hero-bg">
            <div><p>{props.title}</p></div>
         </div>
    )
  }