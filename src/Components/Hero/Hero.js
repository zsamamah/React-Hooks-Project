import React from 'react';
import './hero.css';


export default function Hero(props) {
    return (
        <div className="hero-bg">
            <div className='overlayHero'>
            <div><p className='hero_title'>{props.title}</p></div>
            </div>
         </div>
    )
  }