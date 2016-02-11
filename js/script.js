var score = 0;

function right() {
  score += 10;
}

document.getElementById("button").onclick = function() {result()};
function result() {
    alert("You scored " + score + "% correct");
}