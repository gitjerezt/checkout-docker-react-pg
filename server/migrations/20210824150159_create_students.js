exports.up = function(knex) {
  return knex.schema.createTable('students', table => {
    table.increments('id');
    table.string('first').notNullable();
    table.string('last').notNullable();
    table.integer('age');
  });
};  
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('students');
};