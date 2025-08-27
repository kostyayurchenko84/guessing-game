class GuessingGame {
  constructor() {
    this.min = null;
    this.max = null;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    return Math.round((this.min + this.max) / 2);
  }

  lower() {
    const mayBeThis = this.guess();
    this.max = mayBeThis;
  }

  greater() {
    const mayBeThis = this.guess();
    this.min = mayBeThis;
  }
}

module.exports = GuessingGame;
