export default class DonutMaker {

    constructor(donutCount, autoClicker, donutMultiplier) {
        this.donutCount = donutCount;
        this.autoClicker = autoClicker;
        this.donutMultiplier = donutMultiplier;

        this.donutCount = 0;
        this.autoClicker = 0;
        this.donutMultiplier = 1;

        this.donutMultiplierCost = 10;

        this.autoClickerCost = 100;

    }
    
    addToDonutCount() {
        this.donutCount = this.donutCount + this.donutMultiplier;
    }

    // Multiplier
    buyDonutMultiplier() {
        this.donutMultiplier = this.donutMultiplier * 1.2;
        this.donutCount = this.donutCount - this.donutMultiplierCost;
        this.donutMultiplierCost = this.donutMultiplierCost * 1.1;
        
    }

    showAutoClickerInterval() {
        
        this.donutCount = this.donutCount + (this.donutMultiplier * this.autoClicker);
        
    }

    // Auto clicker 
    buyDonutAutoClicker() {
        this.autoClicker += 1 ;
        this.donutCount = this.donutCount - this.autoClickerCost;
        this.autoClickerCost = this.autoClickerCost * 1.1;
        
    }

    resetGame() {
        this.donutCount = 0;
        this.autoClicker = 0;
        this.donutMultiplier = 1;
        this.donutMultiplierCost = 10;
        this.autoClickerCost = 100;

    }
}
