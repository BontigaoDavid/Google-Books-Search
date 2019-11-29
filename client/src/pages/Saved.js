import React, { Component } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Saved extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        API.getSavedBooks()
            .then(res => {
                this.setState({ books: res.data });
            });
    }

    deleteBook(book) {
        API.deleteBook(book)
            .then(() => {
                console.log("book deleted");
                API.getSavedBooks()
                    .then(res => {
                        this.setState({ books: res.data });
                    });
            });
    }

    render() {
        return ((
            <List>
                {this.state.books.map(book => (
                    <div>

                        <ListItem key={book._id}>
                            <FormBtn onClick={() => { this.deleteBook(book) }}>
                                Delete
                            </FormBtn>

                            <img src={book.image} />
                            <strong><a href={book.link}>{book.title} by {book.authors}</a></strong>
                            <p>{book.description}</p>
                        </ListItem>

                    </div>
                ))}
            </List>
        ))
    }
}

export default Saved;