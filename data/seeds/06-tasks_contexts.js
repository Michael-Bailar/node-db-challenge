exports.seed = function(knex, Promise) {
    return knex('tasks_contexts').insert([   
      { task_id: 1, context_id: 1 },
      { task_id: 1, context_id: 3 },
      { task_id: 2, context_id: 2 },
    ]);
  };