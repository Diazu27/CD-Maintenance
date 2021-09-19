import React, { Component } from 'react'
import Icon1Neg from '../Img/Icon1Neg.svg';
import Icon2Neg from '../Img/Icon2Neg.svg';


export default class Footer extends Component {
    constructor(props){
        super();
        this.state = {whatsapp : "https://wa.me/12398236596",
                     email: "mailto:cdmaintenancerepairs@gmail.com"}
      
     }

    render() {
        return (
            <div className="container-fluid bg-Main mgT" id="Contact">
                <div className="container">
                    <div className="row p-2">
                        <div className="col-12 col-lg-6 RightBorder mt-4">
                          <h2 className="colorMain ml-4 fontBold">Contact Us</h2>
                          <h6 className="colorMain ml-4 ">You can call us at:</h6>
                          <p className="phone mt-4"><i className="fas fa-phone-alt"></i>+1 (239) 823-6596</p>
                        </div>
                            
                        <div className="col-12 col-lg-6 mt-5">
                            <div className="d-flex justify-content-center">
                                 <h6 className="colorMain">Or click the next links</h6>
                            </div>
                            <div class="d-flex justify-content-center">
                                 <a href={this.state.email}><img className="foot-icon" alt="Send Mail" src={Icon1Neg}></img></a>
                                 <a href={this.state.whatsapp} ><img className="foot-icon" alt="Send whatsapp" src={Icon2Neg}></img></a>
                            </div>
                        </div>
                
                    </div>
                </div>
            </div>
        )
    }
}
