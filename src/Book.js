import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap/';

export class Book extends React.Component {

    render() {
        return (
<Card style={{ width: '600px', display: "inline-block" }}>
<Card.Title style={{ textAlign:"center" , fontSize:"40px"}}>📖{this.props.title} </Card.Title>
<Card.Img style={{ marginLeft: "12.5%", width: "75%", height: "300px" }} variant="top"  src={"https://images.all-free-download.com/images/graphiclarge/3d_books_stacked_picture_166357.jpg"} alt="aaaa" />
<Card.Body>
    <p id="description"> description:{this.props.description} </p>
    <h3> 🟢status: {this.props.status} </h3>
   <h3 className="favorites"> 📧email:{this.props.email} </h3>
</Card.Body>
</Card>
    )
}
}

export default Book;
