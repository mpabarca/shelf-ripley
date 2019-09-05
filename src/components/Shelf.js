import React, {Component} from 'react';
import './Shelf.css';
import ProductShelf from './ProductShelf';

class Shelf extends Component{
    render(){
        /*var renderProducts= (this.props.products).map(product=>{
             return(       
                <ProductShelf
                    info={product}
                />
                )
        });*/
        return(
            
            <div className="container-shelf">             
            </div>
        )
    }
}

export default Shelf; 