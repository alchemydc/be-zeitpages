
exports.up = function(knex) {
    return knex.schema.table('users', function (table) {
        table.string("description", 512);
        table.string("viewkey", 256);
      })
};

exports.down = function(knex) {
    return knex.schema.table('users', function(table){
        table.dropColumn('description');
        table.dropColumn("viewkey");
      })
};
