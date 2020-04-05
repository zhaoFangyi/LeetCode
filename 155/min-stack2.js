class MinStack {
  constructor () {
    this.array = [];
    this.min = null;
  }
  push (x) {
    if (this.array.length === 0) {
      this.min = x;
      this.array.push(x)
      return
    }
    if (x <= this.min) {
      this.array.push(this.min)
      this.min = x
    }
    this.array.push(x)
  }
  pop () {
    let top = this.array.pop()
    if (top === this.min) {
      this.min = this.array.pop()
    }
  }
  top () {
    return this.array[this.array.length - 1];
  }

  getMin() {
    return this.min
  }
}