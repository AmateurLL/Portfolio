// Create Game Objects
var playerCharacter;

var myGameArea = {

    start : function() {
        var canvas = document.getElementById("FlappyBoxCanvas"); 
        var context = canvas.getContext("2d");
              
    },
}

function startGame() {
    myGameArea.start();
    playerCharacter = new component(40, 40, "red", 30, 150);
}
            
/* Imagine parent class that holds all functions */
function component(width, height, color, x, y){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;

    //this.update = function(){
        ctx = myGameArea.context;
        ctx.filStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    //}
                    
}

function updateGameArea(){

    //playerCharacter.update();
}

startGame();