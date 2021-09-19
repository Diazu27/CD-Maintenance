import React, { Component } from 'react'
import Carru1 from '../Img/Carrusel1.png';
import Carru2 from '../Img/Carrusel2.png';

export default class LastProjects extends Component {
    render() {
        return (
            <div className="container mgT" id="LastP">
                <h2 className="colorMain fontBold">Our Last Projects</h2>
                <hr className="hr colorMain"></hr>
                
                <div className="container">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src={Carru1} alt="First slide"></img>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={Carru2} alt="Second slide"></img>
                    </div>
            
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
            </div>
            </div>
          
        )
    }
}
