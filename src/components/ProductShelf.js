import React, {Component} from 'react';
import './ProductShelf.css';

class ProductShelf extends Component{
    render(){
        var product = this.props.info;
        return(
            <div id={product.partNumber} className="product-shelf">
                <div className="image-product">
                    <img src={product.fullImage} />
                </div>
                <div class="description-product">
                    <div className="brand-product">{(product.attributes)[0].value}</div>
                    <div className="name-product">{product.name}</div>
                    <div className="old-price">{(product.prices).formattedListPrice}</div>
                    <div className="best-price">{(product.prices).formattedOfferPrice}</div>
                    <div className="card-price">{(product.prices).formattedCardPrice}</div>
                </div>
            </div>
        )
        }
}

export default ProductShelf;