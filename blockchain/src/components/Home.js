import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div>
                <div class="row">
                    <div class="col s8">
                        <div className="container">
                            <h2><b>Welcome to Health-record!</b></h2>
                        </div>
                    </div>
                    <div class="col s4">
                        <div className="container">
                            <ul class="collection with-header" style={{marginTop: 50}}>
                                <li class="collection-header"><h6><b>Choose what you want to do</b></h6></li>
                                <li class="collection-item"><Link to='/upload'>Upload a medical document</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row" style={{padding: 50}}>
                <p ><h6><b>Bhairav Narkhede 1911003</b></h6></p>
                <p ><h6><b>Nidhi Bhanushali 1911004</b></h6></p>
                <p ><h6><b>Samiksha Shrimali 1911048</b></h6></p>
                </div>
            </div>
        )
    }
}

export default Home;