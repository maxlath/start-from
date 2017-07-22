const through = require('through')
var matched = false

module.exports = function (pattern) {
  return through(function (line) {
    if (matched) {
      // Prefix all lines but the first with a newline break
      // to recover them from 'split'
      this.queue('\n' + line)
    } else if (line.match(pattern)) {
      matched = true
      this.queue(line)
    }
  })
}
