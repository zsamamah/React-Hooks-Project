import React, { Component } from 'react'
import Hero from '../Hero/Hero'

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <Hero title="Not Found"/>
                <h1 className='home-heading'>The page you have requested seems to be not found or you have no access to view this page!</h1>
            </div>
        )
    }
}
