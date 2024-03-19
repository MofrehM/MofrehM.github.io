let daysVar = document.querySelector(".calender-days")
let hoursVar = document.querySelector(".calender-hours")
let minutesVar = document.querySelector(".calender-minutes")
let secondsVar = document.querySelector(".calender-seconds")

window.onload = function(){
    let eventDate = new Date("8 Nov 2022 19:40:00").getTime();
   let eventInterval = setInterval(() => {
        let nowDate = new Date().getTime();
        let totalDate = eventDate - nowDate;
        
        daysVar.textContent = Math.floor( totalDate /(1000*24*60*60))
        hoursVar.textContent = Math.floor( totalDate %(1000*24*60*60)/(1000*60*60))
        minutesVar.textContent = Math.floor( totalDate %(1000*60*60)/(1000*60))
        secondsVar.textContent = Math.floor( totalDate %(1000*60)/(1000))
        if(totalDate==0)
        clearInterval(eventInterval)

    }, 1000);
}