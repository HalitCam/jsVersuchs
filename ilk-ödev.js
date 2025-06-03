// Date Construction regulated
const dateObj = new Date()
const dayNumber = dateObj.getDay()
let daysInfo = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const day = daysInfo[dayNumber - 1]
const hour = dateObj.getHours()
const minute = dateObj.getMinutes()
const seconds = dateObj.getSeconds()

const formUsernameDOM = document.querySelector('#formUsername')
formUsernameDOM.addEventListener("submit", submitFunction)

let username
let usernameDOM = document.querySelector("#username")


let helloinfoDOM = document.querySelector("#hello")

function submitFunction(event) {
    event.preventDefault()
    username = usernameDOM.value
    console.log(username)

        // last info is wrotten
    let info = `Hello, ${username} ! Welcome to our Website !
    ${hour}:${minute}:${seconds}  ${day} 
    at this date you are working about first try
    `

   helloinfoDOM.innerHTML = info


}
