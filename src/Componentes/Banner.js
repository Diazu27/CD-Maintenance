import React, { Component } from 'react'
import icon2 from '../Img/Icon5.svg';
import icon3 from '../Img/Icon6.svg';

import {Link as LinkS} from 'react-scroll';

export default class Banner extends Component {

    constructor(props){
       super();
       this.state = {whatsapp : "https://wa.me/12398236596",
                     email: "mailto:cdmaintenancerepairs@gmail.com"}
     
    }

    render() {
        return (     
                <div className="Banner" id="Home">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 align-self-end bg-main">
                                <h3 className="mainSub ">REPAIRS AND MAINTENANCE</h3>
                                <h1 className="mainSub2 ">FOR YOUR HOME</h1>
                                 
                                <div className="mt-4">
                                <LinkS className="btn btnPr"
                                    to="Contact"
                                    smooth={true}
                                    duration={500}
                                    spy={false}
                                    exact="true"
                                    offset={-70}                      
                                >
                                Contact us
                                </LinkS>
                                <LinkS className="btn btnPr"
                                    to="Services"
                                    smooth={true}
                                    duration={500}
                                    spy={false}
                                    exact="true"
                                    offset={-120}                      
                                >
                                Our services
                                </LinkS>
                                </div>
                            </div>
                          
                        </div>
                    </div>

                    <div className="container-fluid mgT2">
                         <div className="row">
                            <div className="card location col-lg-4 col-sm-12">
                                <h4>We are in:</h4>
                                <h5><i className="fas fa-map-marker-alt">  </i>  Cape Coral,  Florida</h5>
                            </div>  
                            <div className=" col-lg-8 col-sm-12 socialIcon" >
                                <div className="m-auto d-flex flex-row-reverse">
                                  
                                    <a href={this.state.whatsapp}> <img src={icon2} alt="Whatsapp"></img></a>
                                    <a href={this.state.email}> <img src={icon3}  alt="Mail"></img></a>
                                </div>
                            </div>

                        </div>  
                    </div>

                </div>   
        )
    }
}
