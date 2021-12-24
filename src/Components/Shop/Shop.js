import React ,{useState} from 'react';
import Products from './Products';
import Hero from '../Hero/Hero';
import "./Shop.css";


export function Shop (props) {
    const [state,setState]=useState({ items:JSON.parse(localStorage.getItem('items'))})
    
    return (
        <>
            <Hero title="Shop Page"/>
                <div className='shop-container'>
                    <Products items={state.items} />
                </div>
            </>
        )
    }
    
    
    export default Shop
    
    