# ZMDB

### The Zombie Movie Database

Zombies, for reasons both morbid and fascinating, have captured the imagination of audiences since the early days of cinema. The genesis of zombie films can be traced back to the eerie presence of 'White Zombie' in 1932, a pioneering film that delved into the realms of voodoo and the undead. However, it was George A. Romero's groundbreaking masterpiece 'Night of the Living Dead' in 1968 that truly defined the modern conception of zombies.

Throughout the following decades, zombies shuffled their way through various iterations, from Romero's sequels like 'Dawn of the Dead' to comedic spins like 'Shaun of the Dead.' Each film added layers to the mythos of the undead, exploring themes of survival, morality, and the fragility of human civilization in the face of apocalyptic scenarios.

the history of zombie films is a testament to humanity's enduring fascination with the macabre and our collective anxieties about mortality and societal collapse. As the genre continues to evolve and adapt to changing times, one thing remains certain: zombies will continue to haunt our screens and our nightmares for years to come.

**FILE STRUCTURE**

- **.env** stores the environment variables

- **reset-database.js:**
  Imports the pool function ( which is part of pg) from _index.js_. Uses pool to to connect and query the database (db) with the SQL language. Deletes all data and table structure. Builds new tables and populates db with test data.

- **index.js:**
  Imports pg from pg module. connects to the database and exports the _pool_object_ by calling the pg function. It is then used for db queries.

- **app.js**
  Serves as a basic API router for the resources held in the db. Its main functions listen for HTTP requests to Create, Read, Update and Delete. The file also employs helper functions imported from _resource_one.js_ and _resource_two.js_.

- **resource_one.js / resource_two.js**
  These files primary function is to query the database using the pool function imported from _index.js_. They are exported and used by _app.js_ for the http requests. Each function has a corresponding role in the API's C.R.U.D. functions.

**TODO**

1. Sign up for a db account and store the PW and access strings in the .env file
2. npm install packages
3. Test connection to the db
4. Edit reset-database.js
5. Write app.js API routes and corresponding helper functions.
