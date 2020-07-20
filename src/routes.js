import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';

const Routes = () => (
    // BrowserRouter: definindo que estamos usando as rotas através de um browser
    // Sitch: permitir que uma única rota seja chamada ao mesmo tempo
    // Route: uma rota que indica que "/" encaminhe para o Main
    // exact: a rota "/" só será usada quando a URL for exatamente "/"
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />
        </Switch>
    </BrowserRouter>
);

export default Routes;