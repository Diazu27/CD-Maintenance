import React, { Component} from 'react'
import {Link as LinkS} from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll'


export default class Navbar extends Component {

    constructor(){
       super();
       this.handleclick = this.handleclick.bind();
    }

    handleclick(){
        scroll.scrollToTop();
    }

    render() {
        return (
           <div>
            <nav className="navbar navStyles navbar-expand-lg navbar-light bg-Main p-4 fixed-top ">
              <div className="container">
              <LinkS className="navbar-brand colorMain logo" onClick={this.handleclick}>CD Maintenance</LinkS>
                <button className="navbar-toggler bg-secu" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
              
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    
                        <li className="nav-item ">
                            <LinkS class="nav-link linksPrimary"
                            to="Contact"
                            smooth={true}
                            duration={500}
                            spy={false}
                            exact="true"
                            offset={-70}                      
                        >
                        Contact
                        </LinkS>
                        </li>

                        <li className="nav-item ">
                            <LinkS className="nav-link linksPrimary"
                                    to="Services"
                                    smooth={true}
                                    duration={500}
                                    spy={false}
                                    exact="true"
                                    offset={-120}                      
                                >
                                Services
                                </LinkS>
                        </li>

                        <li className="nav-item ">
                            <LinkS className="nav-link linksPrimary"
                                    to="LastP"
                                    smooth={true}
                                    duration={500}
                                    spy={false}
                                    exact="true"
                                    offset={-100}                      
                                >
                                Last Projects
                                </LinkS>
                        </li>
    
              
                    </ul>
                </div>
            
              </div>

            </nav>
               
           </div>

        )
    }
}
