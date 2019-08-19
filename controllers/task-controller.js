const redis = require('redis')

let redisClient = redis.createClient()
redisClient.on('connect', function() {
  console.log('Redis connected')
})

exports.taskGet = function(req, res){
  console.log('command received to get all values')

  const fetchFromSet = async () => {
    return new Promise((resolve) => {
      redisClient.smembers("keyset", function(err, keys){
        resolve(keys)
      })
    })
  }

  const fetchHashes = async (key) => {
    return new Promise((resolve) => {
      redisClient.hgetall(key, function(err, taskHash){
        taskHash.id = parseInt(key)
        resolve(taskHash)
      })
    })
  }

  const getAllTasks = async () => {
    let fetchedKeys = await fetchFromSet()
    console.log('fetchedkeys', fetchedKeys)
    let fetchedHashes = []
    for(let i = 0; i < fetchedKeys.length; i++){
      fetchedHashes.push(await fetchHashes(fetchedKeys[i]))
    }
    console.log('fetchedhashes', fetchedHashes)
    return res.send(fetchedHashes)
  }
  getAllTasks()
}

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
    redisClient.sadd("keyset", id)
    redisClient.hmset(id, "description", description, "isDone", isDone, redis.print)
  }
  //res.redirect('http://localhost:3000/task/getall')
  res.send({"here" : "Added successfully"})
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
  redisClient.srem("keyset", id, redis.print)
  redisClient.del(id, redis.print)
  res.send('task deleted')
}

