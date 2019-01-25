# ifNotRunning
Run JS function if it's not running

Parameters:
+ unique identifier
+ function to run

Example:
```
const bar = () => {
    console.log('Started');
    await sleep(2000);
    console.log('Ended');
}
ifNotRunning.run('foo', bar) // will run
ifNotRunning.run('foo', bar) // won't run
ifNotRunning.run('anotherOne', bar) // will run
await sleep(2000)
ifNotRunning.run('foo', bar) // will run
ifNotRunning.run('foo', bar) // won't run
```
