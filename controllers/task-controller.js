const redis = require('redis')

let client = redis.createClient()
client.on('connect', function() {
  console.log('Redis connected')
})
exports.taskAddPost = function(req,res) {
  let task = req.body.task
  console.log('task received', task)
  //client.hmset(task)
}
