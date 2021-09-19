import React, {Component } from 'react'
import {Link as LinkS} from 'react-scroll';

export default class Services extends Component {
    render() {
        return (
            <div className="container mgT" id="Services">
                <h1 className="colorMain fontBold">Our Services</h1>
                <hr className="hr colorMain"></hr>
                
                <div className="container">
                    <div className="row slideani slide">
                            <div className="card col-11 m-3 bg-secu col-lg  Sombra ">
                                <div class="card-body colorSecu">
                                    <h2 class="fontBold"><i class="fas fa-paint-roller mr-3"></i>Paint</h2>
                                    <p class="card-text">Give the best look to your home or office. We guarantee professional and fast work.</p>
                                    <LinkS class="btn bg-Main btnPr"
                                        to="Contact"
                                        smooth={true}
                                        duration={500}
                                        spy={false}
                                        exact="true"
                                        offset={-120}                      
                                    >
                                    Contact Us
                                    </LinkS>
                                </div>
                            </div>

                            <div className="card col-11 m-3 bg-secu col-lg Sombra ">
                                <div class="card-body colorSecu">
                                    <h2 class="fontBold"><i class="fas fa-water mr-3"></i>Pressure wash</h2>
                                    <p class="card-text">Give the best look to your home or office. We guarantee professional and fast work.</p>
                                    <LinkS class="btn bg-Main btnPr"
                                        to="Contact"
                                        smooth={true}
                                        duration={500}
                                        spy={false}
                                        exact="true"
                                        offset={-120}                      
                                    >
                                    Contact Us
                                    </LinkS>
                                </div>
                            </div>

                    </div>  
                   

                    <div className="row slideani slide">
                            <div className="card col-11 m-3 bg-secu col-lg  Sombra ">
                                <div className="card-body colorSecu">
                                    <h2 className="fontBold"><i className="fas fa-tools mr-3"></i>Home repairs</h2>
                                    <p className="card-text">We repair defects in your home, such as doors, light switches, door locks, and others.</p>
                                    <LinkS className="btn bg-Main btnPr"
                                        to="Contact"
                                        smooth={true}
                                        duration={500}
                                        spy={false}
                                        exact="true"
                                        offset={-120}                      
                                    >
                                    Contact Us
                                    </LinkS>
                                </div>
                            </div>

                            <div className="card col-11 m-3 bg-secu col-lg Sombra ">
                                <div className="card-body colorSecu">
                                    <h2 className="fontBold"><i className="fas fa-toolbox mr-3"></i>Maintenance</h2>
                                    <p className="card-text">Keep your home as the first day, we offer you the best service.</p>
                                    <LinkS className="btn bg-Main btnPr"
                                        to="Contact"
                                        smooth={true}
                                        duration={500}
                                        spy={false}
                                        exact="true"
                                        offset={-120}                      
                                    >
                                    Contact Us
                                    </LinkS>
                                </div>
                            </div>

                    </div>  
                </div>

            </div>
        )
    }
}
