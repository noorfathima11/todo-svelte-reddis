const redis = require('redis')

let redisClient = redis.createClient()
redisClient.on('connect', function() {
  console.log('Redis connected')
})
exports.taskAddPost = function(req,res) {
  //let task = req
  console.log('task received')
  //console.log(req.body.text)
  //redisClient.hmset('dummy', name, req.body)
  res.send('Hello World')
}
