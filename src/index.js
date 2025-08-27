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
    const currentGuess = this.guess();
    this.max = currentGuess - 1;
  }

  greater() {
    const currentGuess = this.guess();
    this.min = currentGuess + 1;
  }
}

module.exports = GuessingGame;
