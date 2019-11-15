import axios from "axios";

export default {
    
    // Gets all books
    getSavedBooks: function() {
      return axios.get("/api/books/")
      .then(response => {
          console.log(response.data)
      });
    }
  };

