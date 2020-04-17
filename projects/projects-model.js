const db = require("../data/db-config.js")

module.exports = {
    getProjects,
    getProjectById,
    getResources,
    getResourceById,
    getTasks,
    getTaskById,
    addProject,
    addResource,
    addTask,
}

function getProjects() {
    return db("projects")
}

function getProjectById(id) {
    return db("projects").where({ id }).first()
}

function getResources() {
    return db("resources")
}

function getResourceById(id) {
    return db("resources").where({ id }).first()
}

function getTasks() {
    return db("tasks")
        .join("projects", "tasks.project_id", "projects.id")
        .select("tasks.description as task", "tasks.completed", "projects.name as project", "projects.description as project description")
}

function getTaskById(id) {
    return db("tasks")
        .where({ id })
        .first()
}

function addProject(project) {
    return db("projects")
    .insert(project, 'id')
    .then(([id]) => {
        return(getProjectById(id))
    })
}

function addResource(resource) {
    return db("resources")
    .insert(resource, 'id')
    .then(([id]) => {
        return(getResourceById(id))
    })
}

function addTask(task) {
    return db("tasks")
    .insert(task, 'id')
    .then(([id]) => {
        return (getTaskById(id))
    })
    
}