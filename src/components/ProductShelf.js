import React from 'react';
import './ProductShelf.css';

const ProductShelf = (props) =>{

    
        return(
            <div id='1' className="product-shelf">
                <div className="image-product">
                    <img src={props.url} />
                </div>
                <div class="description-product">
                    <div className="brand-product">MARCA PRODUCTO</div>
                    <div className="name-product">NOMBRE PRODUCTO</div>
                    <div className="old-price">$79.990</div>
                    <div className="best-price">$63.990</div>
                    <div className="card-price">$55.990</div>
                </div>
            </div>
        )
    
}

export default ProductShelf;