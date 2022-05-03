let year = prompt(
    'Please enter a year to determine if it was a leap year or not.'
);

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            alert(`The year ${year} is a leap year.`);
        } else {
            alert(`The year ${year} is a NOT a leap year.`);
        }
    } else {
        alert(`The year ${year} is a leap year.`);
    }
} else {
    alert(`The year ${year} is a NOT a leap year.`);
}
