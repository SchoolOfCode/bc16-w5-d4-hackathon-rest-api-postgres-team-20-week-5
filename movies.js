// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getMovies() {
  try {
    const queryText = "SELECT * FROM movies ORDER BY id";
    const movies = await pool.query(queryText);
    return movies.rows;
  } catch (error) {
    return "error";
  }
  // Query the database and return all resource ones
}

export async function getMovieById(id) {
  // get id from request
  // Query the database and return the resource with a matching id or null
  const queryText = "SELECT * FROM movies WHERE movies.id = $1";
  const movie = await pool.query(queryText, [id]);
  return movie.rows[0] || null;
}

export async function createMovie(movies) {
  try {
    const { title } = movies;
    const queryText = `
    INSERT INTO movies
    (title)
    VALUES ($1)
    RETURNING *`;

    const values = [title];
    const results = await pool.query(queryText, values);
    return results.rows[0];
  } catch (error) {
    console.error(error);
    return "errorzzz";
  }
  // Query the database to create an resource and return the newly created resource
}

export async function updateResourceOneById(id, updates) {
  // Query the database to update the resource and return the newly updated resource or null
}

export async function deleteResourceOneById(id) {
  // Query the database to delete the resource and return the deleted resource or null
}
