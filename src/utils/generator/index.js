const Generator = Object.getPrototypeOf(function*() {})

Generator.prototype.map = function*(mapper, thisArgs) {
  for (let v of this) {
    yield mapper.call(thisArgs, v)
  }
}
Generator.prototype.filter = function*(filter, thisArgs) {
  for (let v of this) {
    if (filter.call(thisArgs, v)) {
      yield v
    }
  }
}

export default Generator
