// var playerName = window.prompt("What is your robot's name?")
var playerName = "TestRobot";
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50; //Should be 50
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);



 

// Fight function with a parameter name for enemy robot's name
var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0 && playerHealth > 0) {
       
        // Ask players if they want to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");

        if (promptFight === 'skip' || promptFight === "SKIP") { //end promptFight
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes, leave fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight!");
                //Subtract money for skipping
                playerMoney = playerMoney -10;
                console.log("playerMoney " + playerMoney);
                
            }
        }// end if pomptFight === skip

        
        // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and update 'enemyHealth'
        enemyHealth = enemyHealth - playerAttack;

        // Log resulting message to the console so we know it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        // check enemy's health
        if (enemyHealth<=0) {
            window.alert(enemyName + " has died");

            // Award player money for winning
            playerMoney = playerMoney + 20;
            // Leave while () loop since enemy is dead.
            break;
            
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of 'enemyAttack' from 'playerHealth' and update 'playerHealth'
        playerHealth = playerHealth - enemyAttack;

        // Log resulting message to the console so we know it worked.
        console.log( enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        if (playerHealth <=0) {
            window.alert(playerName + " has died.");
            // Player is dead leave while loop
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.")
        }
        
    }//end while


};//end of fight function

// Function to start of a new game
var startGame = function() {

    // Reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;


    for(var i = 0; i <enemyNames.length; i++) {
        if (playerHealth> 0){

        
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));
            //debugger;
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 20;//should be 50
            // Pass the enemy name into the fight function
            fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost your robot in battle! Game Over");
            break;
        }

    }
    // Play again
    startGame();
}; // end startGame()

// var startGame has to be declared before it can be called.
startGame();

