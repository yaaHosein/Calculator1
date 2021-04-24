class DevelopedCalculator extends Calculator {
    history = [];
    render() {
        super.render()
            // first create a div 
        const historyDiv = document.createElement("div");
        // add the text to the div
        historyDiv.appendChild(document.createTextNode("History:" + this.currentResult));
        // prepend the historyDiv in the host element 
        this.hostElem.prepend(historyDiv);
    }

    onButtonNumberClick_(event) {
        this.history.push(this.currentResult);
    }
    history = [this.currentResult];
}
const developedCalculator = new DevelopedCalculator("#hostElement_");
developedCalculator.render();