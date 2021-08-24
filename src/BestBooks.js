import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from "axios";
import Book from './Book';
import SelectBook from "./SelectBook";
import { withAuth0 } from "@auth0/auth0-react";
class MyFavoriteBooks extends React.Component {
  constructor(){
    super();
    this.state={
      book:[],
      showData:false,
      show:false,
    }
  }

  
  componentDidMount= async () => {
    try {
      let DataResult = await axios.get(`${process.env.REACT_APP_SERVER_LINK}/books?email=${this.props.auth0.user.email}`);
      console.log( DataResult.data);

      DataResult ?await this.setState({
        book: DataResult.data,
        showData: true,
      }) : this.setState({
        book: [],
        showData:false,
      })
    } catch (error) {
      await this.setState({
        book: [],
        showData:false,
      })
    }
  }
  handleAddBook  = async (e) =>{
    console.log(e.target.status.value);
    e.preventDefault();

    let book ={
      status : e.target.status.value,
      description : e.target.desc.value,
      email : e.target.email.value,
      title : e.target.title.value,
    }
// let book ={ title: "abd",  description: "This Book is for  managment",  status: "On Stock",  email: "abuataabooood@yahoo.com" }
    // let catInfoData = await axios.get(`${process.env.REACT_APP_SERVER}/addCat`,{params:catInfo}) ****if you want send obj with grt
    let DataResult = await axios.post(`${process.env.REACT_APP_SERVER_LINK}/addBook?email=${this.props.auth0.user.email}`,book);
    console.log(DataResult);
    await this.setState({
      book: DataResult.data,
    });
  
  }

   handelShowModel= async ()=>{ // arrow fun
    console.log(this);
    await this.setState({
      show:true,
    });

  }
 handleClose=async ()=>{
    await this.setState({
      show:false,
    })
  }
 

  deleteBook = async (bookID) =>{
  
    // let DataResult = await axios.delete(`${process.env.REACT_APP_SERVER_LINK}/deletBook?catID=${bookId}`)
    let DataResult= await axios.delete(`${process.env.REACT_APP_SERVER_LINK}/deletBook/${bookID}?email=${this.props.auth0.user.email}`);
    console.log(DataResult.data);
    this.setState({
      book: DataResult.data,
    });
    
  }
  

   
  render() {
    return(
      <>
      <Jumbotron>
        <h1 >My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <button onClick={this.handelShowModel}> Add New Book</button>
      </Jumbotron>
       <div id="main" style={{ width: '100%',alignContent:"space-evenly"}}>
       {this.state.showData && this.state.book.map((book, indx) => {

         return (<Book key={indx}  title={book.title} status={book.status} email={book.email} description={book.description} bookId={book._id} deleteBook={this.deleteBook}/>);

       })

       }
       </div>
      <SelectBook show={this.state.show} handleClose={this.handleClose} handleAddBook={this.handleAddBook}/>
       </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);