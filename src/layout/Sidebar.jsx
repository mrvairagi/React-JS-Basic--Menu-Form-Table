import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';
import navItems from '../_nav.json'
import SidebarItem from './SidebarItem';



export default class Sidebar extends Component {
    
    render() {
        
        return (
            <div className='sidebar'>
                <Nav defaultActiveKey="/home" className="flex-column" variant="dark">
                {
                    navItems.map(item => <SidebarItem key={item.title} item={item} />)
                }
                </Nav>
            </div>
        )
    }
}
