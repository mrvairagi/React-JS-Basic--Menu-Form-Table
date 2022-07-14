import React, { Component } from 'react'

import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

export default class Default extends Component {
  render() {
    return (
        <div className="wrapper">
            <Header />
            <div className='d-flex'>
                <div className='sidebar-wrapper'>
                    <Sidebar />
                </div>
                <div className='main-content'>
                    <div className='page-content'>
                        {this.props.children}
                    </div>
                </div>
            </div>
            
            <Footer/>
        </div>
    )
  }
}
