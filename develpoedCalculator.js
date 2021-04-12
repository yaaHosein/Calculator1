class DevelopedCalculator extends Calculator {
    constructor(selector) {
        this.hostElem1 = document.querySelector(selector);
    }

}
let developedCalculator = new DevelopedCalculator("#hostElem1");
developedCalculator.render();