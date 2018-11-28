class NumberValidator {
  constructor(value) {
    this.value = value;
  }

  IsNumber() {
    if (Number(this.value)) {
      return true;
    }
  }

  isLessThanMinimum(minValue) {
    if(minValue > this.value) {
      return true;
    }
  }

  isGreaterThanMaximum(maxValue) {
    if(maxValue < this.value) {
      return true;
    }
  }
}

export default NumberValidator;
