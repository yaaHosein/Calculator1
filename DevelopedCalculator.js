class DevelopedCalculator extends Calculator {
    render() {
        super.render()
        const historyDiv = document.createElement('div');
        const historyDivText = document.createTextNode("History:");
        historyDiv_.appendChild(historyDivText);
        this.hostElm.prepend(historyDiv);
        historyDiv.appendChild(historyDiv_);
    }
}

const developedCalculator = new DevelopedCalculator("#hostElement_");
developedCalculator.render()