import React, { Component } from 'react'
import {Form, FormGroup, Label, Input, Container, Button , Alert, Card,Row, CardImg, CardTitle, Col, CardBody, Modal, ModalHeader, ModalBody} from "reactstrap"
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
        admin:this.props.admin,
        addStock:false,
        removeStock:false,
        quantity:0,
        title:""
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

    handleChange = input => e =>{
        this.setState({
            [input]:e.target.value
        })
        
    }

    AMT=(title)=>
    {
       this.setState({
        addStock:!this.state.addStock,
        title:title
       })
    }

    RMT=(title)=>
    {
       this.setState({
        removeStock:!this.state.removeStock
        ,title:title
       })
    }


    removeStock=()=>
    {
        const Item ={
            Title:this.state.title,
            Q:this.state.quantity
        }

        axios.post("/Admin/RemoveStock" , {Item})
        .then(this.getItems()).then(this.getItems()).then(this.setState({removeStock:false , title:"", quantity:0}))
        
    }

    addStock=()=>
    {
        const Item ={
            Title:this.state.title,
            Q:this.state.quantity
        }

        axios.post("/Admin/AddStock" , {Item})
        .then(this.getItems()).then(this.getItems()).then(this.setState({addStock:false , title:"", quantity:0}))

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
                    {this.state.admin==false ? <Button>View Cart </Button> : null}
                    </Container>

                    <Row>
                        
                        {this.state.items.map((item , i)=>
                        
                        <Card key ={i}style={{width:"300px"}}>
                        <CardImg style={{width:"100px"}} src={item.ImageLink}/>
                        <CardTitle>{item.Title}</CardTitle>
                        <CardBody>
                        <p>Category:{item.Category}</p>
                        <p>Price:{item.Price}</p>
                        <p>Current Stock:{item.Stock}</p>
                        </CardBody>
                        {this.state.admin==true ? 
                        <div>
                        <Button onClick = {()=> this.AMT(item.Title)}>Add Stock</Button>
                        <Button onClick = {()=> this.RMT(item.Title)}>Remove Stock</Button>
                        </div>
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



                <Modal isOpen={this.state.addStock} toggle={this.AMT}>
                    <ModalHeader>Add Stock</ModalHeader>
                    <ModalBody>
                        
                            <Label for="quantity">Quantity</Label>
                            <Input  type="text" name = "quantity "id="quantity1" onChange={this.handleChange("quantity")}></Input>

                            <Button onClick={this.addStock}>Add</Button>
                            <Button onClick={()=>this.AMT("")}>Cancel</Button>
                    </ModalBody>

                </Modal>

                <Modal isOpen={this.state.removeStock} toggle={this.RMT}>
                    <ModalHeader>Remove Stock</ModalHeader>
                    <ModalBody>
                        
                            <Label for="quantity">Quantity</Label>
                            <Input  type="text" name = "quantity "id="quantity1" onChange={this.handleChange("quantity")}></Input>

                            <Button onClick={this.removeStock}>Remove</Button>
                            <Button onClick={()=>this.RMT("")}>Cancel</Button>
                    </ModalBody>

                </Modal>
            </div>
        )
    }
}

export default Shop
