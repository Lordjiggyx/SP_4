import React, { Component } from 'react'
import {Form, FormGroup, Label, Input, Container, Button} from "reactstrap"
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
export class Register extends Component {
    render() {
        return (
            <div>
                <Container>
                <h1>Welcome Please Enter the following details to register</h1>

                    <FormGroup>
                        <Label for = "email">Email:</Label>
                        <Input  type="text" name = "email "id="email"  ></Input>

                        <Label for = "pass">Password:</Label>
                        <Input  type="password" name = "pass "id="pass"></Input>

                        <Label for = "shipping">Shipping Address:</Label>
                        <Input  type="text" name = "shipping "id="shipping" ></Input>
                        
                        <Label for = "Pay">Payment Option:</Label>
                        <Input type="select" name = "pay" id ="pay">
                            <option>Visa</option>
                            <option>MasterCard</option>
                            <option>PayPal</option>
                        </Input>

                
                    <Button>Submit</Button>      

                    </FormGroup>

                    <Link to= "/">
                    <button>Back</button>
                    </Link>
                    
                    </Container>
                
            </div>
        )
    }
}

export default Register
