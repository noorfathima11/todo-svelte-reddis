const express = require('express')
const router = express.Router()
const taskController = require('../controllers/task-controller')


// POST request for adding a task
router.post('/add', taskController.taskAdd)

// POST request for editing isDone field
router.post('/isdone/:id/update', taskController.taskisDoneUpdate)

// DELETE request for deleting a task with particular id
router.delete('/:id/delete', taskController.taskDelete)

module.exports = router

