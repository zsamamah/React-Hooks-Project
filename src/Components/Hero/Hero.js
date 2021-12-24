import React, { Component } from 'react';
import './hero.css';

export class Hero extends Component {
    render() {
        return (
            <div className="hero-bg">
                <div><p>{this.props.title}</p></div>
            </div>
        )
    }
}
export default Hero
