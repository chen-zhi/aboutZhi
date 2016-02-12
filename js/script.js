 function calculateScore()
{
  var score = 0;
  if (document.getElementById('1').checked === true) {score += 10;} else { score += 0;}
  if (document.getElementById('2').checked === true) {score += 10;} else { score += 0;}
  if (document.getElementById('3').checked === true) {score += 10;} else { score += 0;}
  if (document.getElementById('4').checked === true) {score += 10;} else { score += 0;}
  if (document.getElementById('5').checked === true) {score += 10;} else { score += 0;}
  if (document.getElementById('6').checked === true) {score += 10;} else { score += 0;}
  if (document.getElementById('7').checked === true) {score += 10;} else { score += 0;}
  if (document.getElementById('8').checked === true) {score += 10;} else { score += 0;}
  if (document.getElementById('9').checked === true) {score += 10;} else { score += 0;}
  if (document.getElementById('10').checked === true) {score += 10;} else { score += 0;}
  
  alert("You scored " + score + "% correct");
}