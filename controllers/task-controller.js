const redis = require('redis')

let redisClient = redis.createClient()
redisClient.on('connect', function() {
  console.log('Redis connected')
})

exports.taskAdd = function(req,res) {
  console.log('task received')
  console.log(req.body)
  let requestBody = req.body
  let id = 0
  let description = ""
  let isDone = false
  for (let i = 0; i < requestBody.length; i++){
    id = requestBody[i].id
    description = requestBody[i].description
    isDone = requestBody[i].isDone
    console.log(id, description, isDone)
    redisClient.hmset(id, "description", description, "isDone", isDone, redis.print)
  }
  res.send('Added successfully')
}

exports.taskisDoneUpdate = function(req,res){
  console.log('task to update received')
  let id = req.params.id
  let isDone = req.body.isDone
  console.log('id from param', id, isDone)
  redisClient.hset(id, "isDone", true, redis.print)
  res.send('task isDone updated')
}

exports.taskDelete = function(req, res){
  console.log('task to delete received')
  let id = req.params.id
  console.log('id to delete', id)
  res.send('task deleted')
}

