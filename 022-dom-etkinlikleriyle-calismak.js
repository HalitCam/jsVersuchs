// DOM Etkinlikleriyle Calismak
// https://www.w3schools.com/jsref/dom_obj_event.asp

let greetingDOM = document.querySelector("#greeting")
greetingDOM.addEventListener("click",domClick)

function domClick() {
    console.log("tiklandi")
    this.style.color == "black" ? this.style.color = "red" : this.style.color ="black"

}