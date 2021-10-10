
/* Game Functions */

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min +1) + min);

    return value;
};



// Fight function with a parameter name for enemy robot's name
var fight = function(enemy) {
 
    // repeat and execute as long as the enemy-robot is alive
    while(enemy.health > 0 && playerInfo.health > 0) {
       
        // Ask players if they want to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");

        if (promptFight === 'skip' || promptFight === "SKIP") { //end promptFight
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes, leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has chosen to skip the fight!");
                //Subtract money for skipping
                playerInfo.money = Math.max(0, playerInfo.money -10);
                console.log("playerInfo.money " , playerInfo.money);
                break;
                
            }
        }// end if pomptFight === skip

        
        // Subtract the value of 'playerInfo.attack' from the value of 'enemyHealth' and update 'enemyHealth'

        // enemyHealth = Math.max(0, enemyHealth - playerInfo.attack);
        // generate random damage value bbased on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);



        // Log resulting message to the console so we know it worked.
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
            );

        // check enemy's health
        if (enemy.health <=0) {
            window.alert(enemy.name + " has died");

            // Award player money for winning
            playerInfo.money = playerInfo.money + 20;
            // Leave while () loop since enemy is dead.
            break;
            
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        // Subtract the value of 'enemyAttack' from 'playerInfo.health' and update 'playerInfo.health'
        
        var damage = randomNumber(enemy.attack -3, enemy.attack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);

        // Log resulting message to the console so we know it worked.
        console.log( 
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
            );

        if (playerInfo.health <=0) {
            window.alert(playerInfo.name + " has died.");
            // Player is dead leave while loop
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.")
        }
        
    }//end while


};//end of fight function





// Function to start of a new game
var startGame = function() {

  //reset player stats
  playerInfo.reset();

    //fight each enemy robot by looping over them and fighting them one at a time
    for(var i = 0; i <enemyInfo.length; i++) {
        // if player is still alive, keep fighting next enemy
        if (playerInfo.health> 0){

        // let player know what round they are in.
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));
            
            var pickedEnemyObj = enemyInfo[i];
            // gives a number between 0 to 59  floor rounds down
            pickedEnemyObj.health = random(40,60);
          
            // Pass the enemy name into the fight function
            fight(pickedEnemyObj);
           

            //if we're not on the last enemy in the array 
            if (playerInfo.health > 0 && i <enemyInfo.length -1) {
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game!  You now have a score of " + playerInfo.money +".");

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
            playerInfo.refillHealth();
            break;
        
        case "u":
        case "UPGRADE":
        case "upgrade":
           playerInfo.upgradeAttack();
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


var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100, 
    attack: 10,
    money: 10,
    reset:function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            this.health +=20;
            this.money -=7;

        }
     
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            this.attackk += 6;
            this.money -= 7;
        }
    }
};
//enemyInfo array
// enemyInfo[0].name   gives first element name
var enemyInfo = [
    {
        name:"Roborto",
        attack:randomNumber(10,14)
    },
    {
        name: "Amy Android", 
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Trubmle",
        attack: randomNumber(10,14)
    }

];





console.log(enemyInfo);//show the whole objects
console.log(enemyInfo.length);//how many in object array
console.log(enemyInfo[0].name); //names of each element
console.log(enemyInfo[1].name);
console.log(enemyInfo[2].name);


// var startGame has to be declared before it can be called.
startGame();

