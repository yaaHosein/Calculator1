class DevelopedCalculator extends Calculator {
    history = [this.currentResult];
    historyDiv = null;
    render() {
        super.render()
            // first create a div 
        this.historyDiv = document.createElement("div");
        // add the text to the div
        this.historyDiv.appendChild(document.createTextNode("History:" + this.currentResult));
        // prepend the historyDiv in the host element 
        this.hostElem.prepend(this.historyDiv);
    }
    onButtonNumberClick(event) {
        super.onButtonNumberClick(event);
        this.history.push(this.currentResult);
    }
}
const developedCalculator = new DevelopedCalculator("#hostElement_");
developedCalculator.render();