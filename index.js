class IfNotRunning {
  constructor () {
    this.processes = {}
  }
  run (key, process) {
    if (this.processes[key] === undefined) {
      this.processes[key] = process().then(result => {
        this.processes[key] = undefined
        return result
      })
    }
    return this.processes[key]
  }
}

const ifNotRunning = new IfNotRunning()
export default ifNotRunning
