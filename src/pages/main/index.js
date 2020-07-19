import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
    state = {
        products: [],
    };

    componentDidMount() { // Método executado quando o componente for mostrado em tela
        this.loadProducts();
    }

    // Funções nossas devem ser arrow functions
    loadProducts = async () => {
        const response = await api.get('/products');

        this.setState({ products: response.data.docs });
    };

    render() {
        //return <h1>Contagem de produtos: {this.state.products.length}</h1>;

        return (
            <div className="product-list">
                {this.state.products.map(product => (
                    <h2 key={product._id}>{product.title}</h2>
                ))}
            </div>
        );
    }
}