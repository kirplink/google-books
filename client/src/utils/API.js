import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
    search(query){
		return axios.get(BASEURL + "intitle+" + query);
	},
	getSavedBooks(){
		return axios.get("/api/books");
	},
	saveBooks(Book){
		return axios.post("/book/save", Book);
	},
	deleteBook(id) {
		return axios.delete("api/books/" + id);
	}
};