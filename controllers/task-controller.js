const redis = require('redis')

let redisClient = redis.createClient()
redisClient.on('connect', function() {
  console.log('Redis connected')
})
exports.taskAddPost = function(req,res) {
  let task = req.param.id
  console.log('task received', task)
  //client.hmset(task)
  res.send('Hello World')
}
