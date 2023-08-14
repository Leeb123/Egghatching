var eggElement = document.getElementById('egg');
var hatchMessage = document.getElementById('hatch-message');

var clickCount = 0;
var hatchThreshold = 5; // Number of clicks needed to hatch the egg

function hatchEgg() {
  clickCount++;
  if (clickCount >= hatchThreshold) {
    eggElement.classList.add('hatched');
    eggElement.innerHTML = '&#x1F423;'; // Chick emoji
    hatchMessage.textContent = 'Congratulations! The egg has hatched! 🐣';
    eggElement.style.pointerEvents = 'none'; // Disable further clicks
    eggElement.classList.remove('unhatched'); // Remove the wiggling animation
  } else {
    hatchMessage.textContent = `Keep tapping! ${hatchThreshold - clickCount} taps to go. &#x1F95A;`; // Egg emoji
  }
}

