class DevelopedCalculator extends Calculator {
    render_() {
        super.render()
    }

}

const developedCalculator = new DevelopedCalculator("#hostElement_");
developedCalculator.render()