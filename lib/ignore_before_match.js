const through = require('through')
var matched = false

module.exports = function (pattern) {
  return through(function (line) {
    if (matched) {
      this.queue(line + '\n')
    } else if (line.match(pattern)) {
      matched = true
      this.queue(line + '\n')
    }
  })
}
