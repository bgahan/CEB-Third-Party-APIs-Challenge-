var currentHour = moment().hours();
var timeBlock = $(".description");
var saveButton = $(".saveBtn");

// get current day
var date = moment().format("dddd, MMMM Do");

// append current day to header
$("#currentDay").append(date);

// Assign color to time block based on current time of day
function setColor() {
    timeBlock.each(function () {
        var hour = $(this).attr("id");

        if (currentHour > hour) {
            $(this).addClass("past");
        }
        else if (currentHour == hour) {
            $(this).addClass("present");
            $(this).removeClass("past");
        }
        else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    })
}
setColor()

// add an on click listener to the save button
saveButton.on('click', function (event) {
    event.preventDefault()
    // get the time block ids
    var timeBlockId = $(this).siblings("textarea").attr("id")
    var task = $(this).siblings("textarea").val().trim()
    localStorage.setItem(timeBlockId, task)
    showTask()
})
showTask()

function showTask() {
    for (var i = 9; i < 18; i++) {
        var currentTask = localStorage.getItem(i)
        $("#" + i).text(currentTask)
    }
}
