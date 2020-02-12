
exports.up = function(knex) {
  return knex.schema.createTable("users", users => {
    users.increments();
    
    users.string("username", 64)
    .notNullable()
    .unique();



    users.string("password", 64);
    users.string("zaddr", 128).unique();
    users.string("proofposturl", 255);
    users.string("website", 255);
    users.string("twitter", 255);
    users.string("email", 255);
    // users.integer("modified");
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users_cities')
    .dropTableIfExists('users');
  
};
