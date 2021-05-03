let weight = prompt('Please enter your weight in pounds.');
let height = prompt('Please enter your height in inches. ');

let bmi = weight / 2.2 / Math.pow(height / 39.37, 2);
let bmiRound = Math.round(bmi);

if (bmiRound < 18.5) {
    alert(`Your BMI is ${bmiRound}, you are underweight.`);
} else if (bmiRound >= 18.5 && bmiRound <= 24.9) {
    alert(`Your BMI is ${bmiRound}, you have a normal weight.`);
} else if (bmiRound >= 25 && bmiRound <= 29.9) {
    alert(`Your BMI is ${bmiRound}, you are overweight.`);
} else if (bmiRound >= 30) {
    alert(`Your BMI is ${bmiRound}, you are obese.`);
}
