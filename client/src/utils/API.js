import axios from "axios";

export default {
    
    // Gets all books
    getSavedBooks: function() {
      return axios.get("/api/books/");
    },

    getBooks: function() {
      return axios.get("/api/books");
    },

    saveBook: function(book) {
      return axios.post("/api/books",book);
    },

    deleteBook: function(bk) {  
      return axios.delete("/api/books/" + bk._id);
    }
  };

