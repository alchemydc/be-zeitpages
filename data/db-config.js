const knex = require("knex");
const knexfile = require("../knexfile");

//const dbEnv = "production";
const dbEnv = "development";

module.exports= knex(knexfile[dbEnv]);