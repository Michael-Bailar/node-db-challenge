const db = require("../data/db-config.js")

module.exports = {
    getProjects,
    getResources,
    getTasks,
}

function getProjects() {
    return db("projects")
}

function getResources() {
    return db("resources")
}

function getTasks() {
    return db("tasks")
        .join("projects", "tasks.project_id", "projects.id")
        .select("tasks.description as task", "tasks.completed", "projects.name as project", "projects.description as project description")
}