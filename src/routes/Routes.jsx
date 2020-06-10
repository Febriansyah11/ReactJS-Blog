import React, { Component } from 'react'
import Dashboard from '../components/dashboard/Dashboard'
import { Switch, Route } from 'react-router-dom'
import ContentRoutes from './ContentRoutes'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import contentReducer from '../reducers/ContentReducer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { createStore } from "redux";

export default class Routes extends Component {
    render() {
        const { articlePath } = this.props
        return (
            <Provider store={createStore(contentReducer)}>
                <div className="container-fluid d-flex flex-column p-0">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/java" component={ContentRoutes} />
                        <Route path="/springboot" component={ContentRoutes} />
                        <Route path="/react-js" component={ContentRoutes} />
                        <Route path="/react-native" component={ContentRoutes} />
                    </Switch>
                    <Footer />
                </div>
            </Provider>
        )
    }
}
