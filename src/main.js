class IfNotRunning {
  constructor () {
    this.processes = {}
  }
  run (key, process) {
    let result = this.processes[key]
    if (result === undefined) {
      // run
      result = process()

      // lock
      this.processes[key] = result

      const unlock = () => this.processes[key] = undefined
      if (result && typeof result.then === 'function') {
        // promise => unlock when promise ends
        return result
          .then(result => {
            unlock()
            return result
          })
          .catch(unlock)
      } else {
        // not a promise => unlock now
        unlock()
      }
    }
    return result
  }
}

const ifNotRunning = new IfNotRunning()
export default ifNotRunning
