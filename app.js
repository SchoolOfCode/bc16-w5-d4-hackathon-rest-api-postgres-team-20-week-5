// Import the required modules
import express from "express";

// Import your helper functions for your first resource here
import { getMovies, getMovieById, createMovie } from "./movies.js";

// Import your helper functions for your second resource here
// import {
//   getResourceTwo,
//   getResourceTwoById,
//   createResourceTwo,
//   updateResourceTwoById,
//   deleteResourceTwoById,
// } from "./resource_two.js";

// Initialize the express app
const app = express();
// Retrieve the port number from environment variables
const PORT = process.env.PORT;

app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests

// Resource One Route Handlers

app.get("/movies/", async function (req, res) {
	try {
		const movies = await getMovies();
		res.status(200).json({ success: true, payload: movies });
	} catch (error) {
		console.error(error);
		res.status(404).send("No such directory");
	}
});

// Endpoint to retrieve a <resource_one> by id
app.get("/movies/:id", async function (req, res) {
	// get id from request
	// call helper function
	// respond with data
	const id = req.params.id;
	const movie = await getMovieById(id);
	if (!movie) {
		return res
			.status(404)
			.json({ status: "fail", data: { msg: "Movie not found" } });
	}

	res.status(200).json({ status: "success", data: movie });
});

// Endpoint to create a new <resource_one>
app.post("/movies/", async function (req, res) {
	try {
		const movieData = req.body;
		const addedMovie = await createMovie(movieData);
		res.status(201).json({ success: true, payload: addedMovie });
	} catch (error) {
		console.log(error);
		return "error";
	}
});

// Endpoint to update a specific <resource_one> by id
app.patch("/movies/:id", async function (req, res) {});

// Endpoint to delete a specific <resource_one> by id
app.delete("/resourceone/:id", async function (req, res) {});

// Resource Two Route Handlers

// Endpoint to retrieve all <resource_twos>
app.get("/resourcetwo/", async function (req, res) {
	const authors = await getAuthors();
	res.status(200).json({ status: "success", data: authors });
});

// Endpoint to retrieve a <resource_twos> by id
app.get("/resourcetwo/:id", async function (req, res) {});

// Endpoint to create a new <resource_twos>
app.post("/resourcetwo/", async function (req, res) {});

// Endpoint to update a specific <resource_twos> by id
app.patch("/resourcetwo/:id", async function (req, res) {});

// Endpoint to delete a specific <resource_twos> by id
app.delete("/resourcetwo/:id", async function (req, res) {});

// Start the server and listen on the specified port
app.listen(PORT, function () {
	console.log(`Server listening on port ${PORT}`);
});
