import React, { Component } from 'react';
import Testimonial from './Testimonials';
import Team from './Ourteam';
import Intro from './Intro.js';
import Service from './Services';
import Slider from './Slider';
import Youtube from '../Youtube';

export default class Home extends Component {

    render() {
        return (
            <div className="homePageContainer">
                <Intro />
                <Service />
                <Slider />
                <Testimonial />
                <Team />
                <Youtube />
            </div>
        )
    }
}
