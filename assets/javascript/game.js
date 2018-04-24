//variables
var wins = 0;
var losses = 0;
var userScore = 0;

var randomNumber = Math.floor(Math.random() * (40 - 10)) + 10;

console.log(randomNumber);

//jQuery goes here
$(".random-number").append(randomNumber)
$(".wins").append(wins)
$(".losses").append(losses)
$(".current-number").append(userScore)

//functions
$(".img-thumbnail1").on("click", function() {
    userScore = userScore + 1;
    $(".current-number").html(userScore)
    numberCheck();
} )

$(".img-thumbnail2").on("click", function() {
    userScore = userScore + 5;
    $(".current-number").html(userScore)
    numberCheck();
} )

$(".img-thumbnail3").on("click", function() {
    userScore = userScore + 10;
    $(".current-number").html(userScore)
    numberCheck();
} )

$(".img-thumbnail4").on("click", function() {
    userScore = userScore + 20;
    $(".current-number").html(userScore)
    numberCheck();
} )

function numberCheck() {
    if (userScore === randomNumber) {
        wins++;
        $(".wins").html(wins);
        resetGame();
    } else if (userScore > randomNumber) {
        losses++;
        $(".losses").html(losses);
        resetGame();
    }
}

function resetGame() {
    userScore = 0;
    $(".current-number").html(userScore);
    console.log("reset game function works");
    randomNumber = Math.floor(Math.random() * (40 - 10)) + 10;
    $(".random-number").html(randomNumber);
}





