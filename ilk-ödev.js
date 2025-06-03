// Date Construction regulated
const dateObj = new Date()
const dayNumber = dateObj.getDay()
let daysInfo = ["Monday" , "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]  
const day = daysInfo[dayNumber-1]
const hour = dateObj.getHours()
const minute = dateObj.getMinutes()
const seconds = dateObj.getSeconds()

// last info is wrotten
let info = `Hello, ${username} ! Welcome to our Website !
${hour}:${minute}:${seconds}  ${day} 
at this datum you are working about first Try
`
const formUsernameDOM = document.querySelector('#formUsername')
formUsernameDOM.addEventListener("submit", submitFunction)

function submitFunction(){
    console.log("you clicked submit button")
}