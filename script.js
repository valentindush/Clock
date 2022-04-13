let hr = document.querySelector('.circle.c')
let min = document.querySelector('.circle.b')
let sec = document.querySelector('.circle.a')

let d_hr = document.querySelector('span.hr')
let d_min = document.querySelector('span.min')
let d_sec = document.querySelector('span.sec')

const day = document.querySelector('.day')
const amPM = document.querySelector('.am')
setInterval(()=>{
    const date  = new Date()
    const hours = date.getHours() * 30
    const minutes = date.getMinutes() * 6 
    const seconds = date.getSeconds() * 6 


    const months = ["Jan","Feb","March","April","May","June","July","August","Sept","Oct","Nov","Dec"]
    hr.style.transform = `rotate(${hours+(minutes/12)}deg)`
    min.style.transform = `rotate(${minutes}deg)`
    sec.style.transform = `rotate(${seconds}deg)`
    day.innerHTML = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`

    d_hr.innerHTML = (date.getHours() < 10)? 0+""+date.getHours() : date.getHours()
    d_min.innerHTML = (date.getMinutes() < 10)? 0+""+date.getMinutes() : date.getMinutes()
    d_sec.innerHTML = (date.getSeconds() < 10)? 0+""+date.getSeconds() : date.getSeconds()
    

    amPM.innerHTML = (date.getHours() < 12) ? "AM":"PM"

},1000)
