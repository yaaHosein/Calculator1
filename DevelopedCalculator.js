class DevelopedCalculator extends Calculator {
    history = [this.currentResult];
    render() {
        super.render()
            // first create a div 
        const historyDiv = document.createElement("div");
        // add the text to the div
        historyDiv.appendChild(document.createTextNode("History:" + this.currentResult));
        // prepend the historyDiv in the host element 
        this.hostElem.prepend(historyDiv);
    }
    onButtonNumberClick() {
        this.history.push(this.currentResult);
        super.onButtonNumberClick()
    }
}
const developedCalculator = new DevelopedCalculator("#hostElement_");
developedCalculator.render();