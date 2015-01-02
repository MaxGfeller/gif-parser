var Parser = require('binary-parser').Parser

var gif = new Parser()
  .string('signature', {
    encoding: 'ascii',
    length: 6
  })
  .bit2('screenWidth')
  .bit2('screenHeight')

module.exports = function(buffer, cb) {
  var data = gif.parse(buffer)

  if (!/GIF8(7|9)a/.test(data.signature))
    throw new Error('Incorrect signature')

  cb(null, data)
}
