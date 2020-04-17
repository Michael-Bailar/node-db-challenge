exports.seed = function(knex, Promise) {
    return knex('projects').insert([   
      { name: 'finish sprint', description: "Just the project for the day", completed:false },
      { name: 'make lunch', description: "Going with fried eggs and ham today", completed:false}
    ]);
  };
  