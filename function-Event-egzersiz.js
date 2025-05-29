let counterDOM = document.querySelector("#counter")
counterDOM.innerHTML =0

let decreaseDOM = document.querySelector("decrease")
decreaseDOM.addEventListener("click",clickFunction())

let increaseDOM = document.querySelector("increase")
increaseDOM.addEventListener("click",clickFunction())


function clickFunction(){
    if (this == decreaseDOM){
        counterDOM.innerHTML -=1
    } else if(this == increaseDOM){
        counterDOM.innerHTML +=1
    }
}
