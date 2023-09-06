function bmiCalculator(weight, height) {
    let bmi = weight / (height * height);
    return bmi;
}

var bmi = bmiCalculator(65,1.8);
/*function  bmiCalculator(kg,m){
    var height = Math.pow(m,2);
    var bmi = Math.round(kg/height);
    console.log("BMI "+bmi)
}

var bmi = bmiCalculator(65,1.8);
*/