const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    let bmi;
    if (height === '' || height < 0 || isNaN(height)) {
        alert('Please enter a valid height.');
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        alert('Please enter a valid weight.');
    } else {
        bmi = weight / Math.pow(height / 100, 2);
        results.innerHTML = `<span> Results :  ${bmi.toFixed(2)}</span>`;
        results.style.color = 'blue';
    }
    // Check BMI after calculation
    if (bmi < 18.6) {
        console.log("Underweight");
    } else if (bmi >= 18.6 && bmi < 24.9) {
        console.log("Normal weight");
    } else {
        console.log("Overweight");
    }
});