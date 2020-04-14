import React, { Component } from 'react'
import {Form, FormGroup, Label, Input, Container, Button , Alert} from "reactstrap"
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
  import axios from "axios"
import Shop from '../Shop';
export class cLogin extends Component {
    state = {
        email:"",
        password:"",
        servermsg:"",
        EmptyError:null,
        ServerError:false,
        visible : false,
        step:0,
        admin:null

    }

    handleChange = input => e =>{
        this.setState({
            [input]:e.target.value
        })
        
    }

    Login= async e =>
    {
        e.preventDefault();
        const {email , password} = this.state
        if(email ==""  || password ==""   )
        {
            this.setState({EmptyError:true})
        }
        else
        {

            const user = 
            {
                email:email,
                password:password,
            }

            // const response =  await fetch(`/Customer/login`, {
            //     method: 'POST',
            //     headers: {
            //       'Content-Type': 'application/json',
            //     },
            //    body: JSON.stringify(user)
            // },
            
            // ).then((result) => console.log(result.json()))

            axios.post("/Customer/login" , {user})
            .then(res => {
                console.log(res)
                if(res.data.msg != "success")
                {
                    this.setState({
                        servermsg:res.data.msg,
                        ServerError:true,
                        visible:true
                    
                    },()=>
                    {
                        window.setTimeout(()=>{
                            this.setState({visible:false})
                          },2500)
                    })
                }
                else
                {
                    console.log(res.data)
                    this.setState({step:1, admin:false})
                }
            
            })
            


            console.log("success")
        }
    }

    render() {
        const {step} = this.state

        switch(step)
        {
            case 0:
                return (
            <div>
                 <Container>
                <h1> Enter the following details to Login</h1>

                    <FormGroup>
                        <Label for = "email">Email:</Label>
                        <Input  type="text" name = "email "id="email"  onChange={this.handleChange("email")}   ></Input>

                        <Label for = "pass">Password:</Label>
                        <Input  type="password" name = "pass "id="pass"  onChange={this.handleChange("password")}  ></Input>
                
                    <Button onClick={this.Login}>Submit</Button>      

                    </FormGroup>
                    {this.state.EmptyError==true ? <Alert isOpen={this.state.visible} color="danger">Enter  All Fields</Alert> : null}
                  {this.state.ServerError==true ? <Alert  isOpen={this.state.visible}color="danger">{this.state.servermsg}</Alert> : null}

                    <Link to= "/Login">
                    <button >Back</button>
                    </Link>
                    
                    </Container>
            </div>
        )
        case 1:
        return(
            <Shop
            admin={this.state.admin}/>
        )
    }
}
}

export default cLogin
