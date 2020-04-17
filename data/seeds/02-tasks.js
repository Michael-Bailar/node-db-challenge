exports.seed = function(knex, Promise) {
    return knex('tasks').insert([   
      { description: 'create the server', notes: "all the things", completed:false, project_id: 1 },
      { description: 'test the server', completed:false, project_id: 1},
      { description: 'Turn in sprint retro', notes: "from the website", completed:false, project_id: 1},
      { description: 'Prepare ingredients', notes: "ham and eggs", completed:false, project_id: 2 },
      { description: 'Cook lunch', notes: "got a nice pan for that", completed:false, project_id: 2 },
      { description: 'Clean Dishes', completed:false, project_id: 2 },
    ]);
  };
  