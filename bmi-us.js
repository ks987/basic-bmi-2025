
// IMPERIAL 
let bmiBtnUS = document.querySelector('.bmi-btn-us');
let bmiResultUS = document.querySelector('.bmi-result-us');


function findBmiUS() {

    let heightFt = parseFloat(document.querySelector('.height-input-ft').value);
    let heightIn = parseFloat(document.querySelector('.height-input-in').value);
    let weightLB = parseFloat(document.querySelector('.weight-input-lb').value);

    let fullInches = heightFt * 12 + heightIn;
    let bmiUS = weightLB * 703 / fullInches / fullInches;

    bmiResultUS.innerHTML = bmiUS.toFixed(2);
}

bmiBtnUS.addEventListener('click', findBmiUS);

