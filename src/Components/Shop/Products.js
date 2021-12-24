import React from 'react';
import ProductItem from './ProductItem';

export function Products(props) {

        if (!props.items) {
            return (<h1 className='shop-text-center'>No Products Yet!</h1>);
        } else
            return (
                <div className='shop-card-grid'>
                    {!props.showDelete&&
                        props.items.map((item,index) => {
                            return <ProductItem showDelete={props.showDelete} deleteCard={props.deleteCard} num={index} key={item.id} item={item} />
                        })
                    }
                    {props.showDelete&&
                        props.items.map((item,index) => {
                            return <ProductItem showDelete={props.showDelete} deleteCard={props.deleteCard} num={index} key={item.id} item={item} />
                        })
                    }
                </div>
            )
    }

export default Products

