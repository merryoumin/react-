let blockchainScore = 50;
let frontendScore = 40;

let totalScore = frontendScore + blockchainScore;

if (totalScore > 78) {
  console.log("great!");
} else if (totalScore > 50) {
  console.log("good!");
} else if (totalScore > 30) {
  console.log("try harder!");
} else {
  console.log("sad!");
}
