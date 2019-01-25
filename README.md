[![npm (scoped)](https://img.shields.io/npm/v/if-not-running.svg)](https://www.npmjs.com/package/if-not-running)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/if-not-running.svg)](https://www.npmjs.com/package/if-not-running)
[![Build Status](https://travis-ci.org/anwfr/if-not-running.svg?branch=master)](https://travis-ci.org/anwfr/if-not-running)

# if-not-running
Run JS function if it's not running currently.

### Usage
Parameters:
+ unique identifier
+ process to run (supports synchronous and asynchronous functions).

Returns: value returned from process

### Example
```js
import ifNot from 'if-not-running'

const job = () => {
  // long job...
}
ifNot.run('foo', job) // run
ifNot.run('foo', job) // don't run (still running)

ifNot.run('anotherJob', job) // run
ifNot.run('anotherJob', job) // don't run (still running)

// when job finished...
ifNot.run('foo', job) // run
ifNot.run('anotherJob', job) // run
```

Supports synchronous processes:
```js
const job = () => {
  // long job...
  return 123
}
const result = ifNot.run('foo', job) // result = 123
```

As well as asynchronous processes:
```js
// process can be asynchronous
const job = () => {
  return new Promise((resolve, reject) => {
      // long job...
      resolve(123)
  })
}
ifNot.run('foo', job).then(result => {
  // result = 123
})
```
