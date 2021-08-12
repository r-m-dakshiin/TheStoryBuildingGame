var Dice1 = [
    '1.jfif',
    '7.jpg',
    '3.jfif',
    '4.jfif',
    '5.jfif',
    '6.jfif'
]

var Dice2 =[
    '1.jfif',
    '2.png',
    '3.png',
    '4.jfif',
    '5.jfif',
    '6.jfif' 
]
var Dice3 = [
    '1.jfif',
    '2.png',
    '3.jfif',
    '4.jfif',
    '5.png',
    '6.jfif'
]
var Dice4 = [
    '1.jfif',
    '2.jfif',
    '3.jfif',
    '4.jfif',
    '5.jfif',
    '6.jfif'
]
var Dice5 = [
    '1.jfif',
    '2.jfif',
    '3.jfif',
    '4.jfif',
    '5.jfif',
    '6.jfif'
]

var Dice6 = [
    '1.jfif',
    '2.png',
    '3.jfif',
    '4.jfif',
    '5.jfif',
    '6.jfif'
]


var Dice7 = [
    '1.jfif',
    '2.jfif',
    '3.png',
    '4.jfif',
    '5.jfif',
    '6.jfif'
]
var Dice8 = [
    '1.jfif',
    '2.jfif',
    '3.jfif',
    '4.jfif',
    '5.png',
    '6.jfif'
]
var Dice9 = [
    '1.jfif',
    '2.jfif',
    '3.png',
    '4.jfif',
    '5.jfif',
    '6.jfif'
]

function randGen(){
    
    
    var random = Math.floor(Math.random() * Dice1.length);
    
    var ISAs = Dice1[random];
    
    document.getElementById("dice").src = "Dice1/"+ISAs;
    
    
    var random2 = Math.floor(Math.random() * Dice2.length);
    
    var ISAs2 = Dice2[random2];
    
    document.getElementById("dice2").src = "Dice2/"+ISAs2;
    
    
    
    var random3 = Math.floor(Math.random() * Dice3.length);
    
    var ISAs3 = Dice3[random3];
    
    document.getElementById("dice3").src = "Dice3/"+ISAs3;
    
    
    
    var random4 = Math.floor(Math.random() * Dice4.length);
    
    var ISAs4 = Dice4[random4];
    
    document.getElementById("dice4").src = "Dice4/"+ISAs4;
    
    
    var random5 = Math.floor(Math.random() * Dice5.length);
    
    var ISAs5 = Dice5[random5];
    
    document.getElementById("dice5").src = "Dice5/"+ISAs5;
    
    
    var random6 = Math.floor(Math.random() * Dice6.length);
    
    var ISAs6 = Dice6[random6];
    
    document.getElementById("dice6").src = "Dice6/"+ISAs6;
    
    
    var random7 = Math.floor(Math.random() * Dice7.length);
    
    var ISAs7 = Dice7[random7];
    
    document.getElementById("dice7").src = "Dice7/"+ISAs7;
    
    
    var random8 = Math.floor(Math.random() * Dice8.length);
    
    var ISAs8 = Dice8[random8];
    
    document.getElementById("dice8").src = "Dice8/"+ISAs8;
    
    
    var random9 = Math.floor(Math.random() * Dice9.length);
    
    var ISAs9 = Dice9[random9];
    
    document.getElementById("dice9").src = "Dice9/"+ISAs9;
    
}
