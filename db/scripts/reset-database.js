import { pool } from "../index.js";

// >>> MAKE SURE YOU UNDERSTAND THIS FILE AND WHAT IT'S DOING <<<
// >>> FEEL FREE TO CHANGE IT TO MAKE YOUR OWN RESOURCES (TABLES AND PROPERTIES) - YOU DON'T HAVE TO USE ALBUMS AND ARTISTS <<<

async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
        DROP TABLE IF EXISTS movies CASCADE;
        DROP TABLE IF EXISTS directors CASCADE;
    `);

    await pool.query(`
    CREATE TABLE directors (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        date_of_birth DATE NOT NULL,
        country VARCHAR(255) NOT NULL
    );
`);

    // Create the artists table
    await pool.query(`
        CREATE TABLE movies (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            title VARCHAR(255) NOT NULL
        );
    `);

    // Create the albums table with a foreign key to the artists table

    // Seed the artists table
    await pool.query(`
        INSERT INTO directors (name, date_of_birth, country)
        VALUES 
            ('Dua Lipa', '1930-06-26', 'Argentina'),
            ('Jay-Z', '1998-07-02', 'USA');
    `);

    // Seed the albums table
    await pool.query(`
        INSERT INTO movies (title)
        VALUES 
            ('Zombie Blood Bath'),
            ('Night of the Living Dead'),
            ('Reasonable Doubt'),
            ('The Blueprint');
    `);

    console.log("Database reset successful");
  } catch (error) {
    console.error("Database reset failed: ", error);
  } finally {
    // End the pool
    await pool.end();
  }
}

await resetDatabase();
