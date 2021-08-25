import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from "axios";
import Book from './Book';
import SelectBook from "./SelectBook";
import { withAuth0 } from "@auth0/auth0-react";
import UpdateBook from './UpdateBook';
//**********************************************************************************************************************************
class MyFavoriteBooks extends React.Component {
  constructor() {
    super();
    this.state = {
      book: [],
      showData: false,
      show: false,
      showUpdate: false,
      bookToUpdate:{},
    }
  }

  //**********************************************************************************************************************************
  componentDidMount = async () => {
    try {
      let DataResult = await axios.get(`${process.env.REACT_APP_SERVER_LINK}/books?email=${this.props.auth0.user.email}`);
      DataResult ? await this.setState({
        book: DataResult.data,
        showData: true,
      }) : this.setState({
        book: [],
        showData: false,
      })
    } catch (error) {
      await this.setState({
        book: [],
        showData: false,
      })
    }
  }
  //**********************************************************************************************************************************
  handleAddBook = async (e) => {
    console.log(e.target.status.value);
    e.preventDefault();
    let book = { status: e.target.status.value, description: e.target.desc.value, email: e.target.email.value, title: e.target.title.value, }
    let DataResult = await axios.post(`${process.env.REACT_APP_SERVER_LINK}/addBook?email=${this.props.auth0.user.email}`, book);
    await this.setState({
      book: DataResult.data,
    });
  }
  //************************************************************************************************************************************
  handelShowModel = async () => { // arrow fun
    console.log(this);
    await this.setState({
      show: true,
    });
  }
  //**********************************************************************************************************************************
  handleClose = async () => {
    await this.setState({
      show: false,
      showUpdate: false,
    })
  }
  // *********************************************************************************************************************************
  deleteBook = async (bookID) => {

    // let DataResult = await axios.delete(`${process.env.REACT_APP_SERVER_LINK}/deletBook?catID=${bookId}`)
    let DataResult = await axios.delete(`${process.env.REACT_APP_SERVER_LINK}/deletBook/${bookID}?email=${this.props.auth0.user.email}`);
    this.setState({
      book: DataResult.data,
    });
  }
  // *********************************************************************************************************************************
  bookToUpdate = async (bookInf) => { 
    await this.setState({
      showUpdate: true,
      bookToUpdate :bookInf,
    });
    
  }
  //**********************************************************************************************************************************
  handleUpdateBook = async (bookInf) => {

    let DataResult = await axios.put(`${process.env.REACT_APP_SERVER_LINK}/updateBook/${bookInf._id}`,bookInf);// put like post
    this.setState({
      book: DataResult.data,
    });

  }
  //**********************************************************************************************************************************
  render() {
    return (
      <>
        <Jumbotron>
          <h1 >My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>
          <button onClick={this.handelShowModel}> Add New Book</button>
        </Jumbotron>
        <div id="main" style={{ width: '100%', alignContent: "space-evenly" }}>
          {this.state.showData && this.state.book.map((book, indx) => {
            console.log(book);
            return (<Book key={indx} bookInf={book} deleteBook={this.deleteBook} bookToUpdate={this.bookToUpdate} />);
          })
          }
        </div>
        <SelectBook show={this.state.show} handleClose={this.handleClose} handleAddBook={this.handleAddBook} />
        <UpdateBook showUpdate={this.state.showUpdate} handleClose={this.handleClose} handleUpdateBook={this.handleUpdateBook} bookInf={this.state.bookToUpdate}/>
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);