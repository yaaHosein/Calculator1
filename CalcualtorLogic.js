class CalcualtorLogic {
    add(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;

        let firstCalculation = new CalcualtorLogic(this.number1, this.number2)
        return firstCalculation = this.number1 + this.number2;
    };

};

firstCalculation.add(1, 2);

// firstCalculation.subtract();
// firstCalculation.divide();
// firstCalculation.multiply();