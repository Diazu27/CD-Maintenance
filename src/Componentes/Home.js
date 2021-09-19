import React, { Component } from 'react'
import Banner from './Banner'
import Services from './Services'

import LastProjects from './LastProjects'

export default class Home extends Component {
    render() {
        return (
           <div className="mt-5">
               <Banner />
               <Services />
               <LastProjects />
           </div>
        )
    }
}
