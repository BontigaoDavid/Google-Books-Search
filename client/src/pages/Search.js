import React, { Component } from "react";
import API from "../utils/API";
import axios from "axios";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";


class Search extends Component {
    state = {
        books: []
    }

    saveBook(book) {
        API.saveBook(book)
        alert("Book saved!");
    }

    componentDidMount() {
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };



    handleFormSubmit = event => {
        event.preventDefault();

        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.title)
            .then(response => {

                this.setState({
                    books: response.data.items.map(item => {
                        // console.log(item.volumeInfo)
                        return {
                            title: item.volumeInfo.title,
                            authors: item.volumeInfo.authors,
                            description: item.volumeInfo.description,
                            image: item.volumeInfo.imageLinks.thumbnail,
                            link: item.volumeInfo.infoLink
                        }

                    })
                })
                console.log(this.state.books)
            })
    }



    render() {
        return (<Container fluid>
            <form>
                <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Title (required)"
                />

                <FormBtn
                    onClick={this.handleFormSubmit}
                >
                    Search
                  </FormBtn>
            </form>
            {this.state.books.length ? (
                <div>
                    <br></br>
                    <List>
                        {this.state.books.map(book => (
                            <div>

                                <ListItem key={book._id}>
                                    <FormBtn onClick={() => {
                                        this.saveBook(book);
                                    }}>
                                        Save
                                </FormBtn>

                                    <img src={book.image} />
                                    <strong><a href={book.link}>{book.title} by {book.authors}</a></strong>
                                    <p>{book.description}</p>
                                </ListItem>
                            </div>
                        ))}
                    </List>
                </div>
            ) : (
                    <h3>No Results to Display</h3>
                )}
        </Container>)
    }
}

export default Search;