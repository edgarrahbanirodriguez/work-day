var time = new Date();
var hour = time.getHours();
var options = {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
}
var currentDate = time.toLocaleDateString("en-US", options)
console.log(currentDate)

function displayDate() {
    document.getElementById("currentDay").innerHTML = currentDate
}

displayDate()

function loadTime() {
    var time9 = (localStorage.getItem("time9"))

    $("#9").val(time9)

colors()

}

$(".btn").click(function () {
    var text = $(this).siblings("textarea")[0].value
    var id = $(this).siblings("textarea")[0].id
    localStorage.setItem("time" + id, text)
})

function colors() {
    for (i = 9; i <= 17; i++) {
        if (i < hour) {
            $("#" + i). addClass("past")
        } else if(i > hour){
            $("#" + i). addClass("future")
        }else {
            $("#" + i). addClass("present")
        }
    }
}

loadTime()