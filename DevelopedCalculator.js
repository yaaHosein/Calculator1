// creating a child class for Calculator parent
class DevelopedCalculator extends Calculator {
    // defining history as an array
    history = [this.currentResult];
    // saving historyDiv as a property on the class
    historyDiv = null;
    render() {
            //calling the render method of the parent class
            super.render()
                // first create a div 
            this.historyDiv = document.createElement("div");
            // add the text to the div
            this.historyDiv.appendChild(document.createTextNode("History:" + this.currentResult));
            // prepend the historyDiv in the host element 
            this.hostElem.prepend(this.historyDiv);
            //this.historyDiv.gettingHistoryArray();
        }
        // new method has a parameter
    onButtonNumberClick(event) {
        // calling parent class's onButtonNumberClick method
        super.onButtonNumberClick(event);
        // pushing the history array with current result
        this.history.push(this.currentResult);
        //this.historyDiv.gettingHistoryArray();
    }
    gettingHistoryArray() {
        this.history.join(",");
    };

}
// defining instance 
const developedCalculator = new DevelopedCalculator("#hostElement_");
// calling the render method      
developedCalculator.render();