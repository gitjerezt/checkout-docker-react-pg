exports.seed = function(knex) {
    return knex('students').del()
      .then(function () {
        return knex('students').insert([
          {
            first: "John",
            last: "Doe",
            age: 11,
          },
          {
            first: "Patrik",
            last: "Star",
            age: 10
          },
          {
            first: "Batman",
            last: "Knight",
            age: 20,
          },
        ]);
      });
  };