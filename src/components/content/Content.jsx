import React, { Component, Fragment } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Service from '../../services/ContentService'
import { connect } from 'react-redux'
import ReactSpinner from '../../logo.svg'
import '../../assets/styles/layout.css';
import '../../assets/styles/content.css'

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataCategory: []
        }
    }
    getContent = () => {
        const { loading, dispatch } = this.props;
        if (loading === true) {
            Service.getCategorys().then(response => {
                dispatch({ type: 'HANDLE_CATEGORYS', valueLoading: false, valueCategory: response.data })
            }).catch(error => {
                dispatch({ type: 'HANDLE_CATEGORYS', valueLoading: false, valueCategory: [] })
            })
        }
    }
    componentDidMount() {
        console.log("Did Mount");
        this.getContent();
        console.log(this.props.categorys, 'categorys in cdn');
    }

    componentDidUpdate(prevProps) {
        console.log("Did Update");

        if (this.props.categorys !== prevProps.categorys) {
            this.componentDidMount();
        }
    }

    handlePath = () => {

    }
    handleDataCategory(categorys) {
        return (
            categorys.map(category => {
                return (
                    <Link to={`/${category.path}`} className="mx-4 my-xl-5 my-lg-4 my-md-3 my-sm-1 my-xs-1 text-raleway text-dark card-category-parent" style={{ border: 'none', textDecoration: 'none' }} onClick={(e => this.handlePath(category.path))} >
                        <Card className="card-category-content shadow text-center">
                            <Card.Img variant="top" src={category.image} />
                            <Card.Title className="d-flex justify-content-center p-2">{category.title}</Card.Title>
                            {/* <Card.Body>
                                <Card.Link>{category.link}</Card.Link>
                            </Card.Body> */}
                        </Card>
                    </Link>
                )
            })
        )
    }

    loading() {
        return (
            <Fragment>
                <Card style={{ width: '25rem', height: '16rem' }} className="mx-2 mb-xl-5 mb-lg-5 mb-md-3 mb-sm-1 mb-xs-1 align-content-center justify-content-center align-items-center " >
                    <img src={ReactSpinner} className="App-logo col-4" alt="logo" />
                </Card>
                <Card style={{ width: '25rem', height: '16rem' }} className="mx-2 mb-xl-5 mb-lg-5 mb-md-3 mb-sm-1 mb-xs-1 align-content-center justify-content-center align-items-center " >
                    <img src={ReactSpinner} className="App-logo col-4" alt="logo" />
                </Card>
                <Card style={{ width: '25rem', height: '16rem' }} className="mx-2 mb-xl-5 mb-lg-5 mb-md-3 mb-sm-1 mb-xs-1 align-content-center justify-content-center align-items-center " >
                    <img src={ReactSpinner} className="App-logo col-4" alt="logo" />
                </Card>
            </Fragment>
        )
    }
    render() {
        console.log("Render");
        const { loading, categorys } = this.props;
        console.log(categorys, 'categorys in render');
        let data = this.loading();
        if (loading === false) {
            data = this.handleDataCategory(categorys);
        }
        return (
            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center " >
                {data}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { ...state }
}
export default connect(mapStateToProps)(Content);