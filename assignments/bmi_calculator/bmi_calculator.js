// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    if((typeof(mass) !== 'number'&& mass > 0) && (typeof(height) !== 'number' && height > 0)){
        console.log("INVALID INPUT");
    }
    else{
        let bmi = mass/(height * height);
        switch(typeof(bmi)==="number"){
            case bmi < 18:
                console.log("You are Underweight");
                break;
            case bmi >=18 && bmi < 25:
                console.log("You are Normal weight");
                break;
            case bmi >= 25:
                console.log("You are Overweight");
                break;
            default:
                console.log("INVALID INPUT");
        }
    }
}

module.exports = BMICalculator;
