[![npm (scoped)](https://img.shields.io/npm/v/if-not-running.svg)](https://www.npmjs.com/package/if-not-running)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/if-not-running.svg)](https://www.npmjs.com/package/if-not-running)
[![Build Status](https://travis-ci.org/anwfr/if-not-running.svg?branch=master)](https://travis-ci.org/anwfr/if-not-running)

# if-not-running
Run JS function if it's not running

Parameters:
+ unique identifier
+ function to run

Example:
```js
import ifNot from 'if-not-running'

const bar = () => {
    console.log('Started');
    await sleep(2000);
    console.log('Ended');
}
ifNot.run('foo', bar) // will run
ifNot.run('foo', bar) // won't run
ifNot.run('anotherOne', bar) // will run
await sleep(2000)
ifNot.run('foo', bar) // will run
ifNot.run('foo', bar) // won't run
```
