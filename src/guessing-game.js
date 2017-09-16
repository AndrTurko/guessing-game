
class GuessingGame {
    constructor() {
        this.middle = 0;
        this.array = [];
    }

    setRange(min, max) {
        this.max = max;
        for (var i = 0; i <= this.max; i++) {
            this.array.push(i);
        }
    }

    guess() {
        this.middle = Math.floor(this.array.length / 2);
        return this.array[this.middle];
    }

    lower() {
        this.array.splice(this.middle + 1, this.array.length);
    }

    greater() {
        this.array.splice(0, this.middle);

    }
}
module.exports = GuessingGame;