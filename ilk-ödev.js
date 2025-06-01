

let textDOM = document.querySelector("#text")


let submitDOM = document.querySelector("#submit")
submitDOM.addEventListener("click", clickFunction)

let resetDOM = document.querySelector("#reset")
resetDOM.addEventListener("click", clickFunction)

function clickFunction() {
    if(this.id == "submit"){
        console.log(textDOM.innerHTML)
    }

}



