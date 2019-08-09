const redis = require('redis')
const config = require('../config')

let redisClient = redis.createClient(config.redisPort, config.redisHost)
redisClient.on('connect', function() {
  console.log('Redis connected in controller')
})

redisClient.set('naf', '0')
redisClient.incr('naf')

exports.taskAddPost = function(req,res) {
  let task = req.body.task
  console.log('task received', task)
  //client.hmset(task)
}
