import React, { Component } from 'react'
import Carousel from '../carousel/Carousell'
import Content from '../content/Content'
export default class Dashboard extends Component {
    constructor(props){
        super();
        this.state = {
            categoryContent : "programming"
        }
     }
    render() {
        return (
            <div className="d-flex flex-column pl-5 pr-5">
                <Carousel />
                <Content />
            </div>
        )
    }
}
