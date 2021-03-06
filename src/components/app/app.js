import React from 'react';
import './app.scss';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import Header from '../header';

const App = () => {
    return (
        <>
            <main role="main" className="container">
                <Header numItems={5} total={50} />

                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/cart" component={CartPage} />

                </Switch>
            </main>
        </>
    );
};

export default App;