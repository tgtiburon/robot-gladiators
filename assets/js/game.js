var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;



// Fight function
var fight = function(enemyName) {
    // Alert players that they are starting a round
    window.alert("Welcome to Robot Gladiators!")
    // Ask players if they want to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");

    // if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and update 'enemyHealth'
        enemyHealth = enemyHealth - playerAttack;

        // Log resulting message to the console so we know it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        // check enemy's health
        if (enemyHealth<=0) {
            window.alert(enemyName + " has died");
        
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of 'enemyAttack' from 'playerHealth' and update 'playerHealth'
        playerHealth = playerHealth - enemyAttack;

        // Log resulting message to the console so we know it worked.
        console.log( enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        if (playerHealth <=0) {
            window.alert(playerName + " has died.");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.")
        }
    } else if (promptFight === 'skip' || promptFight === "SKIP") { //end promptFight
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        // if yes, leave fight
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight!");
            //Subtract money for skipping
             playerMoney = playerMoney -2;
            
        }
        // if no, ask questions again by running fight() again
        else {
            fight();
        }
        
    } else {
            window.alert("You need to choose a valid option. Try again!");
    }



}
for(var i = 0; i <enemyNames.length; i++) {
    fight(enemyNames[i]);
}

