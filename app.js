// Import the required modules
import express from "express";

// Import your helper functions for your first resource here
<<<<<<< HEAD
import { getMovieById } from "./movies.js";
=======
import { getMovies } from "./movies.js";
>>>>>>> 9026b3972e35ec5717c683baf5e361e46ab2889e

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

// Endpoint to retrieve all <resource_one>
<<<<<<< HEAD
app.get("/resourceone/", async function (req, res) {
	console.log("I'm alive");
	res.status(200).send("I'm alive!");
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
=======
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
app.get("/resourceone/:id", async function (req, res) {});
>>>>>>> 9026b3972e35ec5717c683baf5e361e46ab2889e

// Endpoint to create a new <resource_one>
app.post("/resourceone/", async function (req, res) {});

// Endpoint to update a specific <resource_one> by id
app.patch("/resourceone/:id", async function (req, res) {});

// Endpoint to delete a specific <resource_one> by id
app.delete("/resourceone/:id", async function (req, res) {});

// Resource Two Route Handlers

// Endpoint to retrieve all <resource_twos>
app.get("/resourcetwo/", async function (req, res) {
<<<<<<< HEAD
	const authors = await getAuthors();
	res.status(200).json({ status: "success", data: authors });
=======
  const authors = await getAuthors();
  res.status(200).json({ status: "success", data: authors });
>>>>>>> 9026b3972e35ec5717c683baf5e361e46ab2889e
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
<<<<<<< HEAD
	console.log(`Server listening on port ${PORT}`);
=======
  console.log(`Server listening on port ${PORT}`);
>>>>>>> 9026b3972e35ec5717c683baf5e361e46ab2889e
});
