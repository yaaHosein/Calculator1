class DevelopedCalculator extends Calculator {
    render() {
        super.render()
        const history = document.createElement('div');
        const historyDiv_ = document.createTextNode("History:");
        const historyDiv = this.hostElm.prepend(historyDiv)
    }
}

const developedCalculator = new DevelopedCalculator("#hostElement_");
developedCalculator.render()