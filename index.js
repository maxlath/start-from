#!/usr/bin/env node

const pattern = process.argv.slice(2)[0]

if (typeof pattern !== 'string' || pattern.length === 0) {
  console.error('invalid pattern')
  process.exit(1)
}

const split = require('split')
const handleErrors = require('./lib/handle_errors')
const ignoreBeforeMatch = require('./lib/ignore_before_match')

process.stdin
// Make every line a chunk
.pipe(split())
.pipe(ignoreBeforeMatch(pattern))
.pipe(process.stdout)
.on('error', handleErrors)
