export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }

  get maxStudentsSize() {
    return this._maxStudentsSize;
  }

  set maxStudentsSize(newMaxStudentsSize) {
    this._maxStudentsSize = newMaxStudentsSize;
  }
}
