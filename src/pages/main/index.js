import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
    componentDidMount() { // Método executado quando o componente for mostrado em tela
        this.loadProducts();
    }

    // Funções nossas devem ser arrow functions
    loadProducts = async () => {
        const response = await api.get('/products');

        console.log(response.data.docs);
    };

    render() {
        return <h1>Hello Rocketseat</h1>;
    }
}