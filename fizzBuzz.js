document.getElementById('fizzbuzz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear previous results
    const resultList = document.getElementById('result-list');
    resultList.innerHTML = '';
    
    const numberInput = document.getElementById('number-input').value;
    const number = parseInt(number-input, 10);
    
    if (isNaN(number) || number < 1 || number > 100) {
        alert('Enter a number between 1 and 100');
        return;
    }
    
    const results = [];
    
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            results.push('FizzBuzz');
        } else if (i % 3 === 0) {
            results.push('Fizz');
        } else if (i % 5 === 0) {
            results.push('Buzz');
        } else {
            results.push(i);
        }
    }
    
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        result-list.appendChild(li);
    });
});

