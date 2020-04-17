exports.seed = function(knex, Promise) {
    return knex('contexts').insert([   
      { name: 'Kitchen', description: "Up in the front of the house" },
      { name: 'Office', description: "In the back of the house" },
      { name: 'Living Room', description: "Can do school here with laptop"},
    ]);
  };
  