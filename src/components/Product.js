import React, {Component} from 'react';
import './Product.css';

class Product extends Component{
    render(){

        var listImages = (info.images).map(image => {
            return( <li><img src={image}/></li> )
        }),
            listColor = ((info.definingAttributes)[0].values).map(color =>{
                return( <li><div className="color">{color.values}</div></li>)
        }),
            listSize = ((info.definingAttributes)[1].values).map(size =>{
                return( <li><div className="size">{size.values}</div></li>)
        });

        return(
            <div>
                <div className="back">volver</div>
                <div className="product-container">
                    <div className="product-images">
                        <ul className="side-images">
                            {listImages}
                        </ul>
                        <div className="fullImage"> <img src={info.fullImage}/></div>
                    </div>

                    <div className="product-description">

                        <div className="principal-description">
                            <div className="product-brand">{(info.attributes)[0].value}</div>
                            <div className="product-name">{info.name}</div>
                            <div className="product-sku">SKU: {info.partNumber}</div>
                            <div className="product-shortDescription">{info.shortDescription}</div>
                        </div>

                        <div className="prices-product">
                            <div className="normal-price">
                                <div className="text">{((info.prices).formattedListPrice) ? (<h5>Normal</h5>) : ''}</div>
                                <div className="price">{(info.prices).formattedListPrice}</div>
                            </div>
                            <div className="internet-price">
                                <div className="text">{((info.prices).formattedOfferPrice) ? (<h5>Internet</h5>) : ''}</div>
                                <div className="price">{(info.prices).formattedOfferPrice}</div>
                            </div>
                            <div className="card-price">
                                <div className="text">{((info.prices).formattedCardPrice) ? (<h5>Tarjeta Ripley</h5>) : ''}</div>
                                <div className="price">{(info.prices).formattedCardPrice}</div>
                            </div>
                            <div className="discount-price">
                                <div className="text">{((info.prices).formattedCardPrice) ? (<h5>Descuento</h5>) : ''}</div>
                                <div className="price">-{(info.prices).discountPercentage}%</div>
                            </div>
                        </div>

                        <div className="second-description">
                            <div className="color-product">
                                <h6>COLOR</h6>
                                <ul className="list-colors">
                                    {listColor}
                                </ul>
                            </div>

                            <div className="size-product">
                                <h6>TALLA</h6>
                                <ul className="list-sizes">
                                    {listSize}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Product;