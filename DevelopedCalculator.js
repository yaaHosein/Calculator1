// creating a child class for Calculator parent
class DevelopedCalculator extends Calculator {
    // defining history as an array
    history = [this.currentResult];
    // saving historyElement as a property on the class
    historyElement = this.currentResult;
    render() {
            //calling the render method of the parent class
            super.render()
                // first create a div 
            this.historyElement = document.createElement("div");
            // add the text to the div
            this.historyElement.appendChild(document.createTextNode("History:" + this.currentResult));
            // prepend the historyElement in the host element 
            this.hostElem.prepend(this.historyElement);
        }
        // new method has a parameter
    onButtonNumberClick(event) {
        // calling parent class's onButtonNumberClick method
        super.onButtonNumberClick(event);
        // pushing the history array with current result
        this.history.push(this.currentResult);
        // calling gettingHistoryArray to update the history element after clicking any number button 
        this.gettingHistoryArray();
    }
    gettingHistoryArray() {
        // updating the history element by the history which is joined with the clicked operators
        this.historyElement.textContent = this.history.join(this.operator);
    };
    onOperatorButtonClick(event) {
        // calling parent class's onOperatorButtonClick method
        super.onOperatorButtonClick(event);
        // pushing the history array with current result
        this.history.push(this.currentResult);
        // calling gettingHistoryArray to update the history element after clicking any operator button 
        this.gettingHistoryArray();
    }
}
// defining instance 
const developedCalculator = new DevelopedCalculator("#hostElement_");
// calling the render method      
developedCalculator.render();