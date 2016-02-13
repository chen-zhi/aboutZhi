 function calculateScore()
{
  var score = 0;
  if (document.getElementById('1').checked) {score += 10;}
  if (document.getElementById('2').checked) {score += 10;}
  if (document.getElementById('3').checked) {score += 10;}
  if (document.getElementById('4').checked) {score += 10;}
  if (document.getElementById('5').checked) {score += 10;}
  if (document.getElementById('6').checked) {score += 10;}
  if (document.getElementById('7').checked) {score += 10;}
  if (document.getElementById('8').checked) {score += 10;}
  if (document.getElementById('9').checked) {score += 10;}
  if (document.getElementById('10').checked) {score += 10;}
  
  alert("You scored " + score + "% correct");
}