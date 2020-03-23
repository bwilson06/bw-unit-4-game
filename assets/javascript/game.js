$(document).ready(function(){
let number = $('#numberone');
let score = $('#totalscore');
var rngNumber = (Math.floor(Math.random() * 100)) * 2;
let wins = 0;
let losses = 0;
let totalScore = 0;
let numbers = [1, 5, 10, 2, 4, 6, 8, 9, 11, 3, 7];
let crystalValueOne = numbers[Math.floor(Math.random() * numbers.length)];
let crystalValueTwo = numbers[Math.floor(Math.random() * numbers.length)];
let crystalValueThree = numbers[Math.floor(Math.random() * numbers.length)];
let crystalValueFour = numbers[Math.floor(Math.random() * numbers.length)];
score.text('0');
number.text(rngNumber);

const resetGame = () => {
    totalScore = 0;
    score.text(totalScore);
    rngNumber = (Math.floor(Math.random() * 100)) * 2;
    number.text(rngNumber);
    crystalValueOne = numbers[Math.floor(Math.random() * numbers.length)];
    crystalValueTwo = numbers[Math.floor(Math.random() * numbers.length)];
    crystalValueThree = numbers[Math.floor(Math.random() * numbers.length)];
    crystalValueFour = numbers[Math.floor(Math.random() * numbers.length)];
score.text('0');
}

$('#jewel-one').on("click", function(){
totalScore = totalScore + crystalValueOne
score.text(totalScore)

if (totalScore === rngNumber){
    wins ++
    alert('You Win!');
    alert('Wins: ' + wins)
    resetGame();
    
} else if (totalScore > rngNumber){
    losses ++
    alert('You lose!');
    alert('Losses: ' + losses)
    resetGame();
}
});

$('#jewel-two').on("click", function(){
    totalScore = totalScore + crystalValueTwo
    score.text(totalScore)
    
    if (totalScore === rngNumber){
        wins ++
        alert('You Win!');
        alert('Wins: ' + wins)
        resetGame();
    } else if (totalScore > rngNumber){
        losses ++
        alert('You lose!');
        alert('Losses: ' + losses)
        resetGame();
    }
    
});

$('#jewel-three').on("click", function(){
    totalScore = totalScore + crystalValueThree
    score.text(totalScore)
    
    if (totalScore === rngNumber){
        wins ++
        alert('You Win!');
        alert('Wins: ' + wins)
        resetGame();
    } else if (totalScore > rngNumber){
        losses ++
        alert('You lose!');
        alert('Losses: ' + losses)
        resetGame();
    }
    
});

$('#jewel-four').on("click", function(){
    totalScore = totalScore + crystalValueFour
    score.text(totalScore)
    
    if (totalScore === rngNumber){
        wins ++
        alert('You Win!');
        alert('Wins: ' + wins)
        resetGame();
    } else if (totalScore > rngNumber){
        losses ++
        alert('You lose!');
        alert('Losses: ' + losses)
        resetGame();
    }
    
});

});