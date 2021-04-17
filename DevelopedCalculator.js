class DevelopedCalculator extends Calculator {
    render() {
        super.render()
        this.hostElm.prepend(historyDiv);
        const historyDiv = document.createElement('div');
        const historyDivText = document.createTextNode("History:");
        historyDiv_.appendChild(historyDivText);
        historyDiv.appendChild(historyDiv_);
    }
}

const developedCalculator = new DevelopedCalculator("#hostElement_");
developedCalculator.render()