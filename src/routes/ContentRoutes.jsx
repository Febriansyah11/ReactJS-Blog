import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import { createStore } from "redux";
import articleReducer from '../reducers/ArticleReducer'
import Article from '../components/article/Article';
import Sidebar from '../components/sidebar/Sidebar';
import ArticleList from '../components/article/ArticleList';

class ContentRoutes extends Component {

    componentDidMount() {

    }


    render() {
        const { articlePath } = this.props
        console.log(articlePath.path, "path");
        
        return (
            <Provider store={createStore(articleReducer)}>
                <div className="d-flex flex-row px-5 py-5">
                    <div className="col-9">
                        <Switch>
                            <Route exact path={`/${articlePath.path}`} component={ArticleList} />
                            <Route path={`/${articlePath.path}/${articlePath.pathChild}`} component={Article} />
                        </Switch>
                    </div>
                    <div className="col-3 d-flex flex-column" >
                        <Sidebar />
                    </div>
                </div>
            </Provider>
        )
    }
}

function mapStateToProps(state) {
    return { ...state }
}

export default connect(mapStateToProps)(ContentRoutes)