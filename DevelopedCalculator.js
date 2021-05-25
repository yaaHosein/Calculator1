// creating a child class for Calculator parent
class DevelopedCalculator extends Calculator {
    // defining history as an array
    history = [this.currentResult];
    // saving historyElement as a property on the class
    historyElement = null;
    render() {
        //calling the render method of the parent class
        super.render()
            // first create a div 
        this.historyElement = document.createElement("div");
        // add the text to the div
        this.historyElement.append(document.createTextNode("History: " + this.currentResult));
        // prepend the historyElement in the host element 
        this.hostElem.prepend(this.historyElement);
    }
    gettingHistoryArray() {
        // updating the history element by the history which is joined with ,
        this.historyElement.textContent = this.history.join(",")
    };
    onOperatorButtonClick(event) {
        // calling parent class's onOperatorButtonClick method
        super.onOperatorButtonClick(event);
        // pushing current result and the operator to the history array
        this.history.push(this.currentResult, this.operator);
        // calling gettingHistoryArray to update the history element after clicking any operator button 
        this.gettingHistoryArray();
        // this.history.push(this.currentResult, this.operator);
    }
    onClearButtonClick() {
        super.onClearButtonClick()
        this.history = []
        this.historyElement.textContent = this.history
    }
    onEqualButtonClick() {
        this.history.push(this.currentResult, "=");
        super.onEqualButtonClick()
        this.gettingHistoryArray();
    }
}
// defining instance 
const developedCalculator = new DevelopedCalculator("#hostElement_");
// calling the render method      
developedCalculator.render();