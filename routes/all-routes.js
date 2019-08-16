const express = require('express')
const router = express.Router()
const taskController = require('../controllers/task-controller')


// POST request for adding a task
router.post('/add', taskController.taskAddPost)

// POST request for editing isDone field
router.post('/isdone/:id/update', taskController.taskisDoneUpdate)

module.exports = router

