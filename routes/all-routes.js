const express = require('express')
const router = express.Router()
const taskController = require('../controllers/task-controller')


// POST request for adding a task
router.get('/:id', taskController.taskAddPost)

// POST request for adding a task
//router.post('/tasks/add', taskController.taskAddPost)

module.exports = router

