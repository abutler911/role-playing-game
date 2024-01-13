let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const inventoryText = document.querySelector("#inventoryText");

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function xpGain(num) {
  xp += num;
  xpText.innerText = xp;
}

function healthGain(num) {
  health += num;
  healthText.innerText = health;
}

function goldGain(num) {
  gold += num;
  goldText.innerText = gold;
}

function goStore() {
  text.innerText = "You enter the store.";
  button1.innerText = "Buy health (10 gold)";
  button2.innerText = "Buy weapon (30 gold)";
  button3.innerText = "Go home";
  button1.onclick = buyHealth;
  button2.onclick = buyWeapon;
  button3.onclick = goHome;
  button1.style.display = "block";
  button2.style.display = "block";
  button3.style.display = "block";
  text.style.display = "block";
  inventoryText.style.display = "none";
}

function goCave() {
  text.innerText = "You enter the cave.";
  button1.innerText = "Fight dragon";
  button2.innerText = "Go back to store";
  button3.innerText = "Go home";
  button1.onclick = fightDragon;
  button2.onclick = goStore;
  button3.onclick = goHome;
  button1.style.display = "block";
  button2.style.display = "block";
  button3.style.display = "block";
  text.style.display = "block";
  inventoryText.style.display = "none";
}

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    goldText.innerText = gold;
    health += 10;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}

function buyWeapon() {
  if (gold >= 30) {
    gold -= 30;
    goldText.innerText = gold;
    inventory.push("sword");
    inventoryText.innerText = inventory;
  } else {
    text.innerText = "You do not have enough gold to buy a weapon.";
  }
}

function goHome() {
  text.innerText = "You head back to your house.";
  button1.innerText = "Go to store";
  button2.innerText = "Go to cave";
  button3.innerText = "";
  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = "";
  button1.style.display = "block";
  button2.style.display = "block";
  button3.style.display = "none";
  text.style.display = "block";
  inventoryText.style.display = "none";
}

function fightDragon() {
  fighting = 1;
  goCave();
  monsterHealth = Math.floor(Math.random() * 20) + 80;
  monsterStats.style.display = "block";
  monsterNameText.innerText = "Dragon";
  monsterHealthText.innerText = monsterHealth;
}

function attack() {
  text.innerText = "The Dragon attacks.";
  health -= Math.floor(Math.random() * 5) + 1;
  healthText.innerText = health;
  if (health <= 0) {
    lose();
  }
}

function lose() {
  text.innerText = "You lose.";
  button1.innerText = "Restart";
  button2.innerText = "";
  button3.innerText = "";
  button1.onclick = restart;
  button2.onclick = "";
  button3.onclick = "";
  button1.style.display = "block";
  button2.style.display = "none";
  button3.style.display = "none";
  text.style.display = "block";
  inventoryText.style.display = "none";
}

function win() {
  text.innerText = "You win!";
  button1.innerText = "Restart";
  button2.innerText = "";
  button3.innerText = "";
  button1.onclick = restart;
  button2.onclick = "";
  button3.onclick = "";
  button1.style.display = "block";
  button2.style.display = "none";
  button3.style.display = "none";
  text.style.display = "block";
  inventoryText.style.display = "none";
}

function restart() {
  location.reload();
}

function lose2() {
  text.innerText = "You lose.";
  button1.innerText = "Restart";
  button2.innerText = "";
  button3.innerText = "";
  button1.onclick = restart;
  button2.onclick = "";
  button3.onclick = "";
  button1.style.display = "block";
  button2.style.display = "none";
  button3.style.display = "none";
  text.style.display = "block";
  inventoryText.style.display = "none";
}
