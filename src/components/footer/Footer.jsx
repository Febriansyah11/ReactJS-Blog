import React from 'react'
import { Navbar } from 'react-bootstrap'
import '../../assets/styles/layout.css'
import FanszTha from '../../assets/images/FanszTha0.png'

export default function Footer() {
    return (
        <Navbar bg="dark" className="p-5 navbar-footer d-flex flex-row text-white align-content-center" collapseOnSelect expand="lg" variant="dark">
            {/* <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 d-flex  footer-style-item flex-column justify-content-start text-center">
                <img width="111" src={FanszTha} alt="fansztha" />
                <h4> FanszTha </h4>
            </div> */}
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 d-flex  footer-style-item flex-column align-items-center justify-content-start text-center ">
                <h5 className="text-raleway-footer">SERIES</h5>
                <div className="text-raleway-footer-items">
                    <p className="footer-category">JAVA BASICS</p>
                    <p className="footer-category">JAVA SPRINGBOOT</p>
                    <p className="footer-category">JAVA JSON WEB TOKEN</p>
                    <p className="footer-category">JAVASCRIPT</p>
                    <p className="footer-category">CSS FLEXBOX</p>
                    <p className="footer-category">REACTJS</p>
                    <p className="footer-category">REACTNATIVE</p>
                    <p className="footer-category">OAUTH</p>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 d-flex footer-style-item flex-column justify-content-start align-items-center text-center">
                <h6 className="text-raleway-footer">ABOUT</h6>
                <div className="text-raleway-footer-items">
                    <p className="footer-category">ABOUT FANSZTHA</p>
                    <p className="footer-category">OUR TEAM</p>
                    <p className="footer-category">CONTACT US</p>

                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 d-flex footer-style-item flex-column justify-content-start align-items-center text-center">
                <h6 className="text-raleway-footer">FOLLOW US</h6>
                <div className="text-raleway-footer-items">
                    <p className="footer-category">FACEBOOK</p>
                    <p className="footer-category">INSTAGRAM</p>
                    <p className="footer-category">TWITTER</p>
                    <p className="footer-category">FANSZTHA</p>
                </div>
            </div>
        </Navbar>
    )
}
