
exports.up = function(knex) {
  return(
      knex.schema
        .createTable("projects", tbl => {
            tbl.increments("id", 255).primary()
            tbl.string("name", 255).notNullable().unique()
            tbl.string("description", 255)
            tbl.boolean("completed").notNullable().defaultTo(false)
        })
        .createTable("tasks", tbl => {
            tbl.increments("id", 255).primary()
            tbl.string("description", 255).notNullable().unique()
            tbl.string("notes")
            tbl.boolean("completed").notNullable().defaultTo(false)
            tbl
                .string("project_id", 255)
                .notNullable()
                .references("id")
                .inTable("projects")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
        })
        .createTable("resources", tbl => {
            tbl.increments("id", 255).primary()
            tbl.string("name", 255).notNullable().unique()
            tbl.string("description", 255)
        })
        .createTable("projects_resources", tbl => {
            tbl.increments("id", 255).primary()
            tbl
                .string("project_id", 255)
                .notNullable()
                .references("id")
                .inTable("projects")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
            tbl
                .string("resource_id", 255)
                .notNullable()
                .references("id")
                .inTable("resources")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
            tbl.unique(["project_id", "resource_id"])
        })
        .createTable("contexts", tbl => {
            tbl.increments("id", 255).primary()
            tbl.string("name", 255).notNullable().unique()
            tbl.string("description", 255)
        })
        .createTable("tasks_contexts", tbl => {
            tbl.increments("id", 255).primary()
            tbl
                .string("task_id", 255)
                .notNullable()
                .references("id")
                .inTable("tasks")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
            tbl
                .string("context_id", 255)
                .notNullable()
                .references("id")
                .inTable("contexts")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
            tbl.unique(["context_id", "task_id"])
        })
  )
};

exports.down = function(knex) {
  
};
