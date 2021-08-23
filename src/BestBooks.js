import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from "axios";
import Book from './Book';



class MyFavoriteBooks extends React.Component {
 

  constructor(){
    super();
    this.state={
      book:[],
      showData:false,
    }
  }
  componentDidMount= async () => {
    try {
      let DataResult = await axios.get(`${process.env.REACT_APP_SERVER_LINK}/books`);
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
   
  render() {
    return(
      <>
      <Jumbotron>
        <h1 >My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
      </Jumbotron>
       <div id="main" style={{ width: '100%',alignContent:"space-evenly"}}>
       {this.state.showData && this.state.book.map((book, indx) => {

         return (<Book key={indx}  title={book.title} status={book.status} email={book.email} description={book.description}/>);

       })

       }
       </div>
       </>
    )
  }
}

export default MyFavoriteBooks;
