function timeWatch(){
    const myDate = new Date();
    const myDateFormatted = formatDate(myDate)
    document.getElementById("clock_time") .innerHTML = time;
}

console.log(myDateFormatted);