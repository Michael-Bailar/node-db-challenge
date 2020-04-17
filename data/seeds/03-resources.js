exports.seed = function(knex, Promise) {
    return knex('resources').insert([   
      { name: 'My computer', description: "It's a pc" },
      { name: 'Internet', description: "better have it" },
      { name: 'Cast iron pan'},
      { name: 'ham and eggs', description: "in the fridge" },
      { name: 'Soap and other dishwashing things', description: "all the things" },
      { name: 'Brain power', description: "can't do anything without it" },
    ]);
  };
  