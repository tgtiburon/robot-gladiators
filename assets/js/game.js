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
                break;
                
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
            debugger;
            // Pass the enemy name into the fight function
            fight(pickedEnemyName);
           

            //if we're not on the last enemy in the array 
            if (playerHealth > 0 && i <enemyNames.length -1) {
               // ask if the player wants to go to the shop
               var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
               if(storeConfirm) {
                   shop();

               }
               
            }
        }
        else {
            window.alert("You have lost your robot in battle! Game Over");
            break;
        }
       

    }
    // Play again
    //startGame();

    endGame();
}; // end startGame()

// function to end the entire game
var endGame = function () {
    window.alert("The game is now ended.  Let's see how you did!");
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game!  You now have a score of " + playerMoney +".");

    }
    else{
        window.alert("You've lost your robot in battle.");
    }

    // ask the player if they want to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();

    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }

};

var shop = function() {
    console.log("entered the shop!");
    // ask the player what they'd like to do
    var shopOptionPrompt = window.prompt( 
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop?"

        
    );
    //Use switch to carry out the action
    switch (shopOptionPrompt) {
        case "r":
        case "REFILL": //new case will fall through to lower case version
        case "refill":
            if (playerMoney >=7) {

            
                window.alert("Refilling player's health by 20 for 7 dollars.");
                // increase players health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney -7;
                
            }
            else {
                window.alert("You don't have enough money.");
            }
            break;
        
        case "u":
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >=7) {

            
                window.alert("Upgrading the player's attack by 6 for 7 dollars.");
                //increase players attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money.");
            }
            break;
        case "l":
        case "LEAVE": 
        case "leave":
            window.alert("Leaving the store.");
            // do nothing
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            // call shop again to force player to pick a valid option
            shop();
            break;
            
    }
}

// var startGame has to be declared before it can be called.
startGame();

