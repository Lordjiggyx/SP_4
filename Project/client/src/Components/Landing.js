import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";


export class Landing extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to The Health Food Store</h1>

                <Link to= "/Login">
                    <button>Log In</button>
                </Link>

                <Link to= "/Register">
                    <button>Register</button>
                </Link>
            </div>
        )
    }
}

export default Landing
