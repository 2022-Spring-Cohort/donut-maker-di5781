import DonutMaker from "/js/DonutMaker.js";

const containerEl = document.querySelector(".container");
const donutMaker = new DonutMaker();

let roundAutoClickerCost = 0;
let roundDonutMultiplierCost = 0;
let roundDonutCount = 0;
let roundAutoClicker = 0;
let roundDonutMultiplier = 0;

const donutCountBtnrEl = document.querySelector(".donutCountBtn");
const displayDonutCountEl = document.querySelector(".displayDonutCount");
displayDonutCountEl.innerText = "Donut Count: 0" ;      

const autoClickerBtnEl = document.querySelector(".autoClickerBtn");
const displayAutoClickerCountEl = document.querySelector(".displayAutoClicker");
displayAutoClickerCountEl.innerText = "Donut Auto Clicker: 0";
const displayCostForAutoClickerEl = document.querySelector(".displayCostForAutoClicker");

roundAutoClickerCost = donutMaker.autoClickerCost.toFixed(2);
displayCostForAutoClickerEl.innerText = "Cost you " +  roundAutoClickerCost + " donuts to click!";

const multiplierBtnEl = document.querySelector(".multiplierBtn");
const displayDonutMultiplierCountEl = document.querySelector(".displayMultiplier");
displayDonutMultiplierCountEl.innerText = "Donut Multiplier: 0 "  ;                      
const displayCostForMultiplierEl = document.querySelector(".displayCostForMultiplier");
roundDonutMultiplierCost = donutMaker.donutMultiplierCost.toFixed(2);
displayCostForMultiplierEl.innerText = "Cost you "+  roundDonutMultiplierCost +" donuts for the multiplier!";

const resetBtnEl = document.querySelector(".resetBtn");


document.querySelector(".autoClickerBtn").disabled = true;
document.querySelector(".multiplierBtn").disabled = true;

setInterval(function() {
  donutMaker.showAutoClickerInterval();
  roundDonutCount = donutMaker.donutCount.toFixed(2);
  displayDonutCountEl.innerText = "Donut Count: "+ roundDonutCount;
  checkMultiplierBtnStatus();
  checkAutoClickerBtnStatus();
}, 1000);

const checkMultiplierBtnStatus = function() {
  const displayCostForMultiplierEl = document.querySelector(".displayCostForMultiplier");
  if (donutMaker.donutCount >= donutMaker.donutMultiplierCost) {
      document.querySelector(".multiplierBtn").disabled = false;
      roundDonutMultiplierCost = donutMaker.donutMultiplierCost.toFixed(2);
      displayCostForMultiplierEl.innerText = "this multiplier cost " + roundDonutMultiplierCost + " donuts";
  }
  else {
      document.querySelector(".multiplierBtn").disabled = true;
      roundDonutMultiplierCost = donutMaker.donutMultiplierCost.toFixed(2);
      displayCostForMultiplierEl.innerText = "next multipler cost " + roundDonutMultiplierCost + " donuts";
  }  
  changeTextColor();
}

const checkAutoClickerBtnStatus = function() {
  const displayCostForAutoClickerEl = document.querySelector(".displayCostForAutoClicker");
  if (donutMaker.donutCount >= donutMaker.autoClickerCost) {
      document.querySelector(".autoClickerBtn").disabled = false;
      roundAutoClickerCost = donutMaker.autoClickerCost.toFixed(2);
      displayCostForAutoClickerEl.innerText = "this click cost " + roundAutoClickerCost + " donuts";
  }
  else {
      document.querySelector(".autoClickerBtn").disabled = true;
      roundAutoClickerCost = donutMaker.autoClickerCost.toFixed(2);
      displayCostForAutoClickerEl.innerText = "next click cost " + roundAutoClickerCost + " donuts";
  }
  changeTextColor();
}

const changeTextColor = function() {
  if (donutMaker.donutCount > 150) {
    roundDonutCount = donutMaker.donutCount.toFixed(2);
    let text = "Donut Count: "+ roundDonutCount;
    let result = "<span style='color:green'>" + text + "</span>";
    displayDonutCountEl.innerHTML = result;
  }
  if (donutMaker.autoClicker > 5) {
    roundAutoClicker = donutMaker.autoClicker.toFixed(0);
    let text = "Donut Auto Clicker: " + roundAutoClicker;
    let result = "<span style='color:orange'>" + text + "</span>";
    displayAutoClickerCountEl.innerHTML = result;
  }
  if (donutMaker.donutMultiplier > 10) {
    roundDonutMultiplier = donutMaker.donutMultiplier.toFixed(2);
    let text = "Donut Multiplier: " + roundDonutMultiplier;
    let result = "<span style='color:yellow'>" + text + "</span>";
    displayDonutMultiplierCountEl.innerHTML = result;
  }
}

donutCountBtnrEl.addEventListener("click", () => {
  donutMaker.addToDonutCount();
  checkMultiplierBtnStatus();
  checkAutoClickerBtnStatus();
  roundDonutCount = donutMaker.donutCount.toFixed(2);
  displayDonutCountEl.innerText = "Donut Count: "+ roundDonutCount;

});

// Multipliers
multiplierBtnEl.addEventListener("click", () => {
  donutMaker.buyDonutMultiplier();
  roundDonutCount = donutMaker.donutCount.toFixed(2);
  displayDonutCountEl.innerText = "Donut Count: "+ roundDonutCount;
  roundDonutMultiplier = donutMaker.donutMultiplier.toFixed(2);
  displayDonutMultiplierCountEl.innerText = "Donut Multiplier: " + roundDonutMultiplier;
  checkMultiplierBtnStatus();
  checkAutoClickerBtnStatus();
  
});

// auto clicker
autoClickerBtnEl.addEventListener("click", () => {
  donutMaker.buyDonutAutoClicker();
  roundDonutCount = donutMaker.donutCount.toFixed(2);
  displayDonutCountEl.innerText = "Donut Count: "+ roundDonutCount;
  roundAutoClicker = donutMaker.autoClicker.toFixed(0);
  displayAutoClickerCountEl.innerText = "Donut Auto Clicker: " + roundAutoClicker;
  checkAutoClickerBtnStatus();
  checkMultiplierBtnStatus();

});

// reset
resetBtnEl.addEventListener("click", () => {
  donutMaker.resetGame();
  document.querySelector(".autoClickerBtn").disabled = true;
  document.querySelector(".multiplierBtn").disabled = true;
  displayAutoClickerCountEl.innerText = "Donut Auto Clicker: 0"; 
  displayDonutMultiplierCountEl.innerText = "Donut Multiplier: 0 "  ;
});




