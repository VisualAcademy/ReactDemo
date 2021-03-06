import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'
import FetchApiPractice from './components/FetchApiPractice';
import TextBoxOnChangeEventHandler from './components/TextBoxOnChangeEventHandler';
import ReactFragmentDemo from './components/Samples/ReactFragmentDemo';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/FetchApiPractice' component={FetchApiPractice} />
                <Route path='/TextBoxOnChangeEventHandler' component={TextBoxOnChangeEventHandler} /> 
                <Route path='/ReactFragmentDemo' component={ReactFragmentDemo} />
            </Layout>
        );
    }
}
