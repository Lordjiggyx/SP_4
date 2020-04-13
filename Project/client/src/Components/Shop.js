import React, { Component } from 'react'
import {Form, FormGroup, Label, Input, Container, Button , Alert, Card,Row, CardImg, CardTitle, Col, CardBody} from "reactstrap"
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
  import axios from "axios" 

export class Shop extends Component {


    state ={
        email:"",
        items:[],
        admin:this.props.admin
    }

    componentDidMount()
    {
        this.getItems()
    }

    getItems()
    {
        axios.get("/Items/unsorted")
        .then(res =>
            {
                this.setState({items:res.data})
            })
    }


    render() {
        return (
            <div>
                <Container>
                    <h1>Welcome to the shop</h1>
                    
                    <h2>Items</h2>
                    <Container>
                    <Button>Search By Title </Button>
                    <Button>Search By Category </Button>
                    <Button>Search By Manufacteur </Button>
                    <Button>View Cart </Button>
                    </Container>

                    <Row>
                        
                        {this.state.items.map((item , i)=>
                        
                        <Card style={{width:"300px"}}>
                        <CardImg style={{width:"100px"}} src={item.ImageLink}/>
                        <CardTitle>{item.Title}</CardTitle>
                        <CardBody>
                        <p>Category:{item.Category}</p>
                        <p>Price:{item.Price}</p>
                        <p>Current Stock:{item.Stock}</p>
                        </CardBody>
                        {this.state.admin==true ? 
                        <Button>Edit Stock</Button>
                        :
                        <div>
                        <Button>Add To Cart</Button>
                        <Button>Review</Button>
                        </div>
                    
                    }
                        </Card>
                        )}
                    
                    </Row>
                    
                   
                </Container>
            </div>
        )
    }
}

export default Shop
