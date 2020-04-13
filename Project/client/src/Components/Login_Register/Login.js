import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";

export class Login extends Component {
    render() {
        return (
            <div>
                <h1>Log in as one of the following:</h1>
                
                <Link to = "/aLogin">
                <button>Admin</button>
                </Link>

                <Link to = "/cLogin">
                <button>Customer</button>
                </Link>
            </div>
        )
    }
}

export default Login
