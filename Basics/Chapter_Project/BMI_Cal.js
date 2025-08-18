let heightInInches=70;
let weightInPounds=150;
let heightIncm=heightInInches*2.54;
let weightInkilo=weightInPounds*0.453592;
let bmi=weightInkilo/(heightIncm/100)**2;
console.log("BMI is : "+bmi);
console.log("BMI is : "+bmi.toFixed(2));
console.log("Your BMI is "+(bmi>18.5?"Underweight":bmi>24.9?"Normal":bmi>29.9?"Overweight":"Obese"));