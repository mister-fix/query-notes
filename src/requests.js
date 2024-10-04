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
