import React, {Component} from 'react';
import request from 'superagent';
import Shelf from './components/Shelf';
import Product from './components/Product';

class App extends Component{
    constructor(){
        super();
        this.state = {
            products:[]
        }
    }
    componentDidMount(){
        request
            .get('/products')
            .then((res)=>{
                this.setState({
                    products: (res.body).data
                });
            })
            .catch(error =>{
                console.log('Error' + error);
            });
        
    }
    render(){
        console.log('desde App');
        console.log(this.state.products);
        return(
            <div>
                <h1>Mi Vitrina de Productos</h1>
                <Product/>
            </div>
            
        )
    }
}
export default App;