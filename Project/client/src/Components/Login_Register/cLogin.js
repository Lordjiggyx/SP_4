import React, { Component } from 'react'
import {Form, FormGroup, Label, Input, Container, Button} from "reactstrap"
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

export class cLogin extends Component {
    render() {
        return (
            <div>
                 <Container>
                <h1> Enter the following details to Login</h1>

                    <FormGroup>
                        <Label for = "email">Email:</Label>
                        <Input  type="text" name = "email "id="email"  ></Input>

                        <Label for = "pass">Password:</Label>
                        <Input  type="password" name = "pass "id="pass"></Input>
                
                    <Button>Submit</Button>      

                    </FormGroup>

                    <Link to= "/Login">
                    <button>Back</button>
                    </Link>
                    
                    </Container>
            </div>
        )
    }
}

export default cLogin
