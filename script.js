// Create a function that takes two dates and returns the number of days between the first and second date.
// getDays(
//     new Date('June 14, 2019'),
//     new Date('June 20, 2019')
// )
// var date1 = 'June 14, 2019';
// var date2 = 'June 20, 2019';

// function daysBetween(day1, day2) {
//     var first = new Date(day1)
//     let adate = first.getMonth();
//     console.log(adate);
// }

// daysBetween()

var date1 = 'December 29, 2018';
var date2 = 'January 1, 2019';

const daysBetween = (day1, day2) =>{
    let first = new Date(day1)
    let second = new Date(day2);
    let difference = first.getTime() - second.getTime();
    let amountOfDays = Math.abs(difference / (1000 * 3600 * 24));
    return amountOfDays;
}
console.log(daysBetween(date1, date2));
