import React, { Component } from "react";
import axios from "axios";
import BookInfo from "./components/BookInfo";
import Search from "./components/search"
import API from "./utils/API";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      searchParams: ""
    }
  }
  
  fetchQuery = event => {
    event.preventDefault();
    fetch("https://www.googleapis.com/books/v1/volumes?q=intitle+" + this.state.searchParams)
      .then(res => res.json())
      .then((data) => {
        // console.log(data.items[0].volumeInfo.title);
        // this.setState({books: data.items[0].volumeInfo.title})
        data.items.forEach((item, i) => {
          if (item.volumeInfo.title && item.volumeInfo.authors && item.volumeInfo.description && item.volumeInfo.imageLinks.thumbnail && item.volumeInfo.canonicalVolumeLink) {
            let bookInfo = {
              _id: i,
              link: item.volumeInfo.canonicalVolumeLink,
              title: item.volumeInfo.title,
              author: item.volumeInfo.authors[0],
              description: item.volumeInfo.description,
              image: item.volumeInfo.imageLinks.thumbnail
            }
            this.setState(prevState => ({
              books: [...prevState.books, bookInfo]
            }))
            // console.log(this.state.books)
          }
        })
      })
  }

  handleInputChange = event => {
    console.log(event.target.value)
    this.setState({ searchParams: event.target.value })
  }

  saveBook = event => {
    event.preventDefault();
    API.saveBooks()
    // console.log(this);
  }

  render() {
    return (
      <div className="container grid-lg mt-2">
        
        <BookInfo books={this.state.books} onClick={this.saveBook}/>
        <Search onChange={this.handleInputChange} value={this.state.searchParams} onClick={this.fetchQuery}/>
        
      </div>
    );
  }
}

export default App;
