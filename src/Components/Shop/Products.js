import React, { Component } from 'react';
import ProductItem from './ProductItem';

export class Products extends Component {

    render() {
        if (!this.props.items) {
            return (<h1 className='shop-text-center'>No Products Yet!</h1>);
        } else
            return (
                <div className='shop-card-grid'>
                    {!this.props.showDelete&&
                        this.props.items.map((item,index) => {
                            return <ProductItem showDelete={this.props.showDelete} deleteCard={this.props.deleteCard} num={index} key={item.id} item={item} />
                        })
                    }
                    {this.props.showDelete&&
                        this.props.items.map((item,index) => {
                            return <ProductItem showDelete={this.props.showDelete} deleteCard={this.props.deleteCard} num={index} key={item.id} item={item} />
                        })
                    }
                </div>
            )
    }
}
export default Products

