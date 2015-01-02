var fs = require('fs')
var test = require('tape')
var concat = require('concat-stream')
var gifParser = require('../')

test('basic', function(t) {
  var buffer = fs.readFileSync(__dirname + '/test-image.gif')
  gifParser(buffer, function(err, data) {
    console.log(arguments)
    t.end()
  })
})
