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
        // new method has a parameter
    onButtonNumberClick(event) {
        // calling parent class's onButtonNumberClick method1
        super.onButtonNumberClick(event);
        // pushing the currentResult to the history array 
        // this.history.push(this.currentResult);
        // calling gettingHistoryArray to update the history element after clicking any number button 
        this.gettingHistoryArray();
    }
    gettingHistoryArray() {
        // updating the history element by the history which is joined with ,
        this.historyElement.textContent = this.history.join(",")
    };
    onOperatorButtonClick(event) {
            // calling parent class's onOperatorButtonClick method
            super.onOperatorButtonClick(event);
            const curntresultandopr = this.currentResult + "," + this.operator
            this.history.push(curntresultandopr);
            this.operator = null;
            if (this.history.includes(this.operator)) this.history.push(curntresultandopr);
            // calling gettingHistoryArray to update the history element after clicking any operator button 
            this.gettingHistoryArray();
        }
        //onClearButtonClick() {
        //    super.onClearButtonClick()
        // }
}
// defining instance 
const developedCalculator = new DevelopedCalculator("#hostElement_");
// calling the render method      
developedCalculator.render();