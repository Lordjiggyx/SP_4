import React, { Component } from 'react'
import {Form, FormGroup, Label, Input, Container, Button , Alert, Card,Row, CardImg, CardTitle, Col, CardBody, Modal, ModalHeader, ModalBody} from "reactstrap"
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
  import axios from "axios" 

export class Cart extends Component {



    state = 
    {
        cart:this.props.cart
    }



    render() {
        return (
            <div>
                <Container>
                    <h3>Items in Cart</h3>
                    {this.state.cart.map((item , i)=>
                    <ul>{item.Title}</ul>
                    )}
                    <Button>Buy Items</Button>
                    <Link to=
                    {{
                        pathname:"/Shop",
                        state: {
                            admin :null
                        }
                    }}>
                    <Button>Clear Basket & Return To Shop</Button>
                    </Link>
                </Container>
            </div>
        )
    }
}

export default Cart
