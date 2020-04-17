const express = require('express')

const Projects = require("./projects-model")

const router = express.Router()

router.get("/projects", (req, res) => {
    Projects.getProjects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get projects", error: err });
      });
})

router.get("/projects/:id", (req, res) => {
    const { id } = req.params
    Projects.getProjectById(id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get projects", error: err });
      });
})

router.get("/resources", (req, res) => {
    Projects.getResources()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get resources", error: err });
      });
})

router.get("/resources/:id", (req, res) => {
    const { id } = req.params
    Projects.getResourceById(id)
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get resources", error: err });
      });
})

router.get("/tasks", (req, res) => {
    Projects.getTasks()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: "Failed to get tasks", error: err });
      });
})

router.get("/tasks/:id", (req, res) => {
    const { id } = req.params
    Projects.getTaskById(id)
    .then(task => {
        res.status(200).json(task)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: "Failed to get tasks", error: err });
      });
})

router.post("/projects", (req, res) => {
    Projects.addProject(req.body)
    .then(project=> {
        res.status(201).json({ data: project});
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create new project', error: err });
      });
})

router.post("/resources", (req, res) => {
    Projects.addResource(req.body)
    .then(resource => {
        res.status(201).json({ data: resource});
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create new resource' });
      });
})

router.post("/tasks", (req, res) => {
    Projects.addTask(req.body)
    .then(task => {
        res.status(201).json({ data: task});
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create new task', error:err });
      });
})

module.exports = router;