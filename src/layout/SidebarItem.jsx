import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';

export default class SidebarItem extends Component {
    state = {
        open: false
    }

    render() {
        const { open } = this.state
        const { item } = this.props
        
            if(item.childrens){
                return (
                    <div className={open ? 'sidebar-item open' : 'sidebar-item'}>
                        <div className='sidebar-title'>
                            <span> 
                                {item.icon && <i className={item.icon} />}
                                <Nav.Link href="/home">{item.title}</Nav.Link>
                            </span>
                            <i className='bi-chevron-down toggle-button' onClick={() => this.setState({open: !open})} />
                        </div>
                        <div className='sidebar-content'>
                            {item.childrens.map(child => <SidebarItem key={item.title} item={child} />)}
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className={open ? 'sidebar-item open' : 'sidebar-item'}>
                        <div className='sidebar-title'>
                            <span> 
                                {item.icon && <i className={item.icon} />}
                                <Nav.Link href="/home">{item.title}</Nav.Link>
                            </span>
                        </div>
                    </div>
                )
            } 
        
    }
}
