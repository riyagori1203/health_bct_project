import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'


class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            location: "",
            identicon: null,
            loading: true, 
            account: this.props.account
        }
        
    }

    render(){
        if(this.props.location.pathname === "/"){
            return ( 
                <nav className="nav-wrapper blue darken-3">
                    <div className="container">
                        <a href="/" className="brand-logo center"><i style={{marginTop: 5}} className="material-icons"></i>Health-record</a>
                    </div>
                </nav>
            )
        }else{
            return(
                <nav className="nav-wrapper blue darken-3">
                    <div className="container">
                    <a href="/" className="brand-logo"><i style={{marginTop: 5}} className="material-icons"></i>Health-record</a>
                        <ul className="right hide-on-med-and-down">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/upload">Upload</NavLink></li>
                            <li><NavLink to="/view">View</NavLink></li>
                            <li>
                            </li>
                        </ul>
                    </div>
                </nav>
            )
        }
    }
}

export default withRouter(Navbar)