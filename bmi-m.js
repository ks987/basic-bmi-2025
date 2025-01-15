// METRIC
let buttonM = document.querySelector('.bmi-btn-m');


// Calculate the BMI
function metricBmi() {

    let heightCM = document.querySelector('.height-input-cm').value;
    let weightKG = document.querySelector('.weight-input-kg').value;
    let metricResult = document.querySelector('.bmi-result-m');

    // FORMULA = BMI = 100 * 100* weight / height / height

    let bmiM = 100 * 100* weightKG / heightCM / heightCM;
    metricResult.innerHTML = bmiM.toFixed(2);

}

// Display the BMI result
buttonM.addEventListener('click', metricBmi);


