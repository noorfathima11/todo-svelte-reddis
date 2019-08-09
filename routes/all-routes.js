const express = require('express')
const router = express.Router()
const taskController = require('../controllers/task-controller')

// router.get('/', (req, res, next) => {
//   res.sendFile('../public/')
// })

// POST request for adding a task
router.post('/tasks/add', taskController.taskAddPost)

