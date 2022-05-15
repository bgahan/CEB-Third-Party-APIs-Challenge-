// get current day
var date = moment().format("dddd, MMMM Do");
console.log(date);

// append current day to header
$("#currentDay").append(date);

