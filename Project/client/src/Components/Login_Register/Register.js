import React, { Component } from 'react'
import {Form, FormGroup, Label, Input, Container, Button , Alert} from "reactstrap"
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
export class Register extends Component {

    state = {
        email:"",
        password:"",
        pay:"Visa",
        shipping:"",
        EmptyError:null,

    }


    handleChange = input => e =>{
        this.setState({
            [input]:e.target.value
        })
        
    }

    Register= async e =>
    {
        e.preventDefault();
        const {email , password , shipping , pay} = this.state
        if(email ==""  || password ==""  || shipping ==""  || pay ==""  )
        {
            this.setState({EmptyError:true})
        }
        else
        {

            const user = 
            {
                email:email,
                password:password,
                shipping:shipping,
                pay:pay
            }

            const response =  fetch(`/Customer/register`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
               body: JSON.stringify(user)
            },
            this.setState({
                email:"",
                password:"",
                pay:"",
                shipping:""
             
            })
            
            ).then(  this.setState({EmptyError:false}))



            console.log("success")
        }
    }

    render() {
        return (
            <div>
                <Container>
                <h1>Welcome Please Enter the following details to register</h1>

                    <FormGroup>
                        <Label for = "email">Email:</Label>
                        <Input  type="text" name = "email "id="email" onChange={this.handleChange("email")}  ></Input>

                        <Label for = "pass">Password:</Label>
                        <Input  type="password" name = "pass "id="pass" onChange={this.handleChange("password")}></Input>

                        <Label for = "shipping">Shipping Address:</Label>
                        <Input  type="text" name = "shipping "id="shipping" onChange={this.handleChange("shipping")} ></Input>
                        
                        <Label for = "Pay">Payment Option:</Label>
                        <Input type="select" name = "pay" id ="pay" onChange={this.handleChange("pay")}>
                            <option>Visa</option>
                            <option>MasterCard</option>
                            <option>PayPal</option>
                        </Input>

                
                    <Button onClick = {this.Register}>Submit</Button>      

                    </FormGroup>
                   {this.state.EmptyError==true ? <Alert color="danger">Enter  All Fields</Alert> : null}
                   {this.state.EmptyError==false ? <Alert color="success">Successful Registration proceed to Login</Alert> : null}
                    <Link to= "/">
                    <button>Back</button>
                    </Link>

                    <Link to= "/cLogin">
                    <button>Login</button>
                    </Link>
                    
                    </Container>
                
            </div>
        )
    }
}

export default Register
