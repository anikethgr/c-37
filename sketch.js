var database
var gameState = 0;
var playerCount = 0;
var form, player, game;
var allPlayers;
var distance = 0;

function setup(){
    createCanvas(400,400);
    
    

    database = firebase.database();

    console.log(database);
  
    game = new Game();
    game.getState();
 

    game.start();

    // ref() :  location for read and write eg: car  position
    // set() :  write to the database - update to dB 
    // on() : read from the database - get data from dB
    
}




function draw(){
    background("white");

    if(playerCount === 4){
        game.update(1);
      }
      if(gameState === 1){
        clear();
        game.play();
      }
}

