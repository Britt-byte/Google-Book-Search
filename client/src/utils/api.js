import axios from "axios";

export default {
    searchBooks: function(query) {
        return axios.get("https://googleapis.com/books/v1/volumes?q=" + query);
    },

    getSavedBooks: function() {
        return axios.get("/api/books/saved" );
    },

    deleteBook: function(id) {
        return axios.delete("/api.books/delete/" + id);
    },

    saveBook: function(bookKey, bookData) {
        return axios.post("/api/books/", bookData);
    }
};