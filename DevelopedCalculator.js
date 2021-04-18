class DevelopedCalculator extends Calculator {
    render() {
        super.render()
            // first create a div 
        const historyDiv = document.createElement("div");
        // add the text to the div
        historyDiv.appendChild(document.createTextNode("History:"));
        // prepend the historyDiv in the host element 
        this.hostElm.prepend(historyDiv);
    }
}

const developedCalculator = new DevelopedCalculator("#hostElement_");
developedCalculator.render()