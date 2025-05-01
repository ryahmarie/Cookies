// Selector variables
const oven = document.querySelector("#oven");
const cookie = document.querySelector("#cookie");
const factory = document.querySelector("#factory");
let displayCookies = document.querySelector("#total-cookies");
let displayOvens = document.querySelector("#total-ovens");
let displayFactories = document.querySelector("#total-factories");

// Declare variables
let totalCookies = 0;
let ovens = 0;
let factories = 0;

// Cookie click event
cookie.addEventListener("click", function () {
  totalCookies += 1;  // Increment totalCookies
  displayCookies.innerHTML = totalCookies;  // Update display
});

// Oven click event
oven.addEventListener("click", function () {
  if (totalCookies >= 30) {
    totalCookies -= 30;  // Subtract 30 cookies
    displayCookies.innerHTML = totalCookies;  // Update display
    ovens += 1;  // Add 1 oven
    displayOvens.innerHTML = ovens;  // Update oven display
  } else {
    alert("You need 30 cookies to buy an oven!");  // Alert if not enough cookies
  }
});

// Factory click event
factory.addEventListener("click", function () {
  if (totalCookies >= 100) {
    totalCookies -= 100;  // Subtract 100 cookies
    displayCookies.innerHTML = totalCookies;  // Update display
    factories += 1;  // Add 1 factory
    displayFactories.innerHTML = factories;  // Update factory display
  } else {
    alert("You need 100 cookies to buy a factory!");  // Alert if not enough cookies
  }
});

// Update cookies every second based on ovens and factories
window.setInterval(function () {
  totalCookies += (12 * ovens) + (factories * 2);  // Each oven adds 12 cookies, each factory adds 2 cookies
  displayCookies.innerHTML = totalCookies;  // Update cookie display
}, 1000);
