var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;



var fight = function() {
    // Alert players that they are starting a round
    window.alert("Welcome to Robot Gladiators!")
    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and update 'enemyHealth'
    enemyHealth = enemyHealth - playerAttack;

    // Log resulting message to the console so we know it worked.
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    // check enemy's health
    if (enemyHealth<=0) {
        window.alert(enemyName + " has died");
    
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subtract the value of 'enemyAttack' from 'playerHealth' and update 'playerHealth'
    playerHealth = playerHealth - enemyAttack;
    // Log resulting message to the console so we know it worked.
    console.log( enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    if (playerHealth <=0) {
        window.alert(playerName + " has died.");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.")
    }

}

// execute function
 fight();