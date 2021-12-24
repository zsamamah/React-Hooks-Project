import React, { Component } from 'react';
import Products from './Products';
import Hero from '../Hero/Hero';
import "./Shop.css";


export class Shop extends Component {
    constructor(props){
        super(props)
        this.state={
            items:JSON.parse(localStorage.getItem('items'))
        }
    }

    render() {
        return (
            <>
            <Hero title="Shop Page"/>
                <div className='shop-container'>
                    <Products items={this.state.items} />
                </div>
            </>
        )
    }
}

export default Shop
