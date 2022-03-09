import DonutMaker from "/js/DonutMaker.js";

// const container = (document.querySelector('.container').innerText =
//   'Welcome to Donut Maker Game!');

const containerEl = document.querySelector(".container");
const donutMaker = new DonutMaker();
//const companyDropDownEl = document.querySelector("#companyDropDown")
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
roundAutoClickerCost = Math.round(donutMaker.autoClickerCost);
displayCostForAutoClickerEl.innerText = "Cost you " +  roundAutoClickerCost + " donuts to click!";

const multiplierBtnEl = document.querySelector(".multiplierBtn");
const displayDonutMultiplierCountEl = document.querySelector(".displayMultiplier");
displayDonutMultiplierCountEl.innerText = "Donut Multiplier: 0 "  ;                      
const displayCostForMultiplierEl = document.querySelector(".displayCostForMultiplier");
roundDonutMultiplierCost = Math.round(donutMaker.donutMultiplierCost);
displayCostForMultiplierEl.innerText = "Cost you "+  roundDonutMultiplierCost +" donuts for the multiplier!";

const resetBtnEl = document.querySelector(".resetBtn");


document.querySelector(".autoClickerBtn").disabled = true;
document.querySelector(".multiplierBtn").disabled = true;

setInterval(function() {
  donutMaker.showAutoClickerInterval();
  roundDonutCount = Math.round(donutMaker.donutCount);
  displayDonutCountEl.innerText = "Donut Count: "+ roundDonutCount;
  checkMultiplierBtnStatus();
  checkAutoClickerBtnStatus();
}, 1000);

const checkMultiplierBtnStatus = function() {
  const displayCostForMultiplierEl = document.querySelector(".displayCostForMultiplier");
  if (donutMaker.donutCount >= donutMaker.donutMultiplierCost) {
      document.querySelector(".multiplierBtn").disabled = false;
      roundDonutMultiplierCost = Math.round(donutMaker.donutMultiplierCost);
      displayCostForMultiplierEl.innerText = "this multiplier cost " + roundDonutMultiplierCost + " donuts";
  }
  else {
      document.querySelector(".multiplierBtn").disabled = true;
      roundDonutMultiplierCost = Math.round(donutMaker.donutMultiplierCost);
      displayCostForMultiplierEl.innerText = "next multipler cost " + roundDonutMultiplierCost + " donuts";
  }  
  changeTextColor();
}

const checkAutoClickerBtnStatus = function() {
  const displayCostForAutoClickerEl = document.querySelector(".displayCostForAutoClicker");
  if (donutMaker.donutCount >= donutMaker.autoClickerCost) {
      document.querySelector(".autoClickerBtn").disabled = false;
      roundAutoClickerCost = Math.round(donutMaker.autoClickerCost);
      displayCostForAutoClickerEl.innerText = "this click cost " + roundAutoClickerCost + " donuts";
  }
  else {
      document.querySelector(".autoClickerBtn").disabled = true;
      roundAutoClickerCost = Math.round(donutMaker.autoClickerCost);
      displayCostForAutoClickerEl.innerText = "next click cost " + roundAutoClickerCost + " donuts";
  }
  changeTextColor();
}

const changeTextColor = function() {
  if (donutMaker.donutCount > 10) {
    roundDonutCount = Math.round(donutMaker.donutCount)
    let text = "Donut Count: "+ roundDonutCount;
    let result = "<span style='color:green'>" + text + "</span>";
    displayDonutCountEl.innerHTML = result;
  }
  if (donutMaker.autoClicker > 2) {
    roundAutoClicker = Math.round(donutMaker.autoClicker)
    let text = "Donut Auto Clicker: " + roundAutoClicker;
    let result = "<span style='color:orange'>" + text + "</span>";
    displayAutoClickerCountEl.innerHTML = result;
  }
  if (donutMaker.donutMultiplier > 2) {
    roundAutoClicker = Math.round(donutMaker.donutMultiplier);
    let text = "Donut Multiplier: " + roundAutoClicker;
    let result = "<span style='color:purple'>" + text + "</span>";
    displayDonutMultiplierCountEl.innerHTML = result;
  }
}

donutCountBtnrEl.addEventListener("click", () => {
  donutMaker.addToDonutCount();
  checkMultiplierBtnStatus();
  checkAutoClickerBtnStatus();
  roundDonutCount = Math.round(donutMaker.donutCount);
  displayDonutCountEl.innerText = "Donut Count: "+ roundDonutCount;

});

// Multipliers
multiplierBtnEl.addEventListener("click", () => {
  donutMaker.buyDonutMultiplier();
  roundDonutCount = Math.round(donutMaker.donutCount);
  displayDonutCountEl.innerText = "Donut Count: "+ roundDonutCount;
  roundDonutMultiplier = Math.round(donutMaker.donutMultiplier)
  displayDonutMultiplierCountEl.innerText = "Donut Multiplier: " + roundDonutMultiplier;
  checkMultiplierBtnStatus();
  checkAutoClickerBtnStatus();
  
});

// auto clicker
autoClickerBtnEl.addEventListener("click", () => {
  donutMaker.buyDonutAutoClicker();
  roundDonutCount = Math.round(donutMaker.donutCount);
  displayDonutCountEl.innerText = "Donut Count: "+ roundDonutCount;
  roundAutoClicker = Math.round(donutMaker.autoClicker)
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




