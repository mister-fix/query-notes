import axios from "axios";

const baseUrl = "http://localhost:3001/notes"; // Base API url

// Method to fetch notes from backend
export const getNotes = () => {
	return axios
		.get(baseUrl) // URL of the API
		.then((response) => {
			// Return data when request is successful
			return response.data; // Extract the 'data' from the response object
		})
		.catch((err) => {
			// Log any errors that occur during the request
			console.error("error fetching notes:", err.message);
			// Return empty array as fallback
			return [];
		});
};

// Method to create and save new notes to the backend
export const createNote = (newNote) => {
	return axios
		.post(baseUrl, newNote) // URL of the API and new note object
		.then((response) => {
			// Return the data when request is successful
			return response.data; // Extract the 'data' from the response object
		})
		.catch((err) => {
			// Log any errors that occur during the request
			console.error("error creating new note:", err.message);
		});
};

// Method to update note importance
export const updateNote = (updatedNote) => {
	return axios
		.put(`${baseUrl}/${updatedNote.id}`, updatedNote) // URL of the API/notToUpdate.id and the updated note object
		.then((response) => {
			// Return the data when request is successful
			return response.data; // Extract the 'data' from the response object
		})
		.catch((err) => {
			// Log any errors that occur during the request
			console.error(`error updating note: ${updatedNote.id}`, err.message);
		});
};
