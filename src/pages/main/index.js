import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

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

        const { products } = this.state;

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <a href="">Acessar</a>
                    </article>
                ))}
            </div>
        );
    }
}