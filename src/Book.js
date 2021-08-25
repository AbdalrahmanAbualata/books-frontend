import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap/';

export class Book extends React.Component {
   deleteBook=()=> {
       console.log(this.props.bookInf._id);
        this.props.deleteBook(this.props.bookInf._id);
    }   
    render() {
        return (
<Card style={{ width: '600px', display: "inline-block" }}>
<Card.Title style={{ textAlign:"center" , fontSize:"40px"}}>📖{this.props.bookInf.title} </Card.Title>
<Card.Img style={{ width: "65%", height: "300px" }} variant="top"  src={"https://cdn.shopify.com/s/files/1/1061/1924/products/Open_Book_Emoji_large.png?v=1571606064"} alt="aaaa" />
<Card.Body>
    <h3> description:</h3>
    <p id="description">{this.props.bookInf.description} </p>
    <h3> 🟢status: {this.props.bookInf.status} </h3>
   <h3 className="favorites"> 📧email:{this.props.bookInf.email} </h3>
   <button onClick={this.deleteBook}>Delete</button>
   <button onClick={()=> this.props.bookToUpdate(this.props.bookInf)} >Update</button>
</Card.Body>
</Card>
    )
}
}

export default Book;
