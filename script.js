class Player {
  constructor(health, gold, inventory, xp) {
    this.health = health;
    this.gold = gold;
    this.inventory = inventory;
    this.xp = xp;
  }

  updateStats() {
    healthText.innerText = this.health;
    goldText.innerText = this.gold;
    inventoryText.innerText = this.inventory.join(", ");
  }

  buyItem(cost, item) {
    if (this.gold >= cost) {
      this.gold -= cost;
      this.inventory.push(item);
      this.updateStats();
      text.innerText = `You bought a ${item}.`;
    } else {
      text.innerText = "You do not have enough gold.";
    }
  }

  fight(monster) {
    // Check if the fight is already over
    if (this.health <= 0) {
      text.innerText = "You are too weak to fight.";
      return;
    }

    if (monster.health <= 0) {
      text.innerText = `You have already defeated the ${monster.name}.`;
      return;
    }

    // Player's attack phase
    let playerDamage = Math.floor(Math.random() * 10) + 1; // Randomize player damage
    monster.health -= playerDamage;
    text.innerText = `You attack the ${monster.name} and deal ${playerDamage} damage.`;

    // Check if monster is defeated
    if (monster.health <= 0) {
      this.win(monster);
      return;
    }

    // Monster's counterattack phase
    let monsterDamage = Math.floor(Math.random() * 5) + 1; // Randomize monster damage
    this.health -= monsterDamage;
    text.innerText += `\nThe ${monster.name} counterattacks and deals ${monsterDamage} damage to you.`;

    // Update stats
    this.updateStats();
    monsterHealthText.innerText = monster.health;

    // Check player's survival
    if (this.health <= 0) {
      this.lose();
    }
  }
}
class Monster {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
}

// Initialize player
let player = new Player(100, 50, ["stick"]);

// UI elements
const buttons = {
  store: document.querySelector("#button1"),
  cave: document.querySelector("#button2"),
  fight: document.querySelector("#button3"),
};
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const inventoryText = document.querySelector("#inventoryText");

// Button event listeners
buttons.store.onclick = () => goStore();
buttons.cave.onclick = () => goCave();
buttons.fight.onclick = () => fightDragon();

function goStore() {
  // Store logic
  text.innerText = "You enter the store.";
  buttons.store.innerText = "Buy health (10 gold)";
  buttons.store.onclick = () => player.buyItem(10, "health potion");
  // More store logic
}

function goCave() {
  // Cave logic
}

function fightDragon() {
  let dragon = new Monster("Dragon", 100);
  player.fight(dragon);
}

function restart() {
  location.reload();
}

// Initial UI setup
text.innerText = "Welcome to Dragon Repeller...";
// More setup
