import assert from 'assert'
import ifNot from './index'

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const DELAY = 100

const verify = async (bar, counter) => {
  let expected = 0
  ifNot.run('foo', bar) // run
  expected++

  ifNot.run('foo', bar) // don't run

  ifNot.run('anotherOne', bar) // run
  expected++

  ifNot.run('anotherOne', bar) // don't run

  // verify
  await sleep(2*DELAY)
  assert.equal(counter.i, expected);

  ifNot.run('foo', bar) // run
  expected++

  ifNot.run('foo', bar) // don't run
  await sleep(2*DELAY)

  assert.equal(counter.i, expected);
}

describe('ifNot.run', () => {

  it('process returning resolving promise', async () => {
    const counter = {
      i:0
    }

    const bar = async () => {
      counter.i++
      await sleep(DELAY);
      return Promise.resolve(1) // return promise
    }

    return verify(bar, counter)
  });

  it('process returning failing promise', async () => {
    const counter = {
      i:0
    }

    const bar = async () => {
      counter.i++
      await sleep(DELAY);
      return Promise.reject(1) // return promise
    }

    return verify(bar, counter)
  });

  it('process returning value', async () => {
    const counter = {
      i:0
    }

    const bar = async () => {
      counter.i++
      await sleep(DELAY);
      return -1 // return non-promise value
    }

    return verify(bar, counter)
  });

  it('process returning void', async () => {
    const counter = {
      i:0
    }

    const bar = async () => {
      counter.i++
      await sleep(DELAY);
      // don't return anything
    }

    return verify(bar, counter)
  });
});