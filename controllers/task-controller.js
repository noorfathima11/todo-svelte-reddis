const redis = require('redis')

let redisClient = redis.createClient()
redisClient.on('connect', function() {
  console.log('Redis connected')
})

exports.taskAddPost = function(req,res) {
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
    redisClient.hmset(id, "description", description, "isDone", isDone)
  }
  res.send('Added successfully')
}

exports.taskisDoneUpdate = function(req,res){
  console.log('task to update received')
}

