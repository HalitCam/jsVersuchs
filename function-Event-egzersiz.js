let counter = 0
counter? counter :0


function clickFunction(){
    if (this == decreaseDOM){
        counter -=1
    } else if(this == increaseDOM){
        counter ++ 

    }
}


let counterDOM = document.querySelector("#counter")
counterDOM.innerHTML = counter;

let decreaseDOM = document.querySelector("decrease")
decreaseDOM.addEventListener("click",clickFunction())

let increaseDOM = document.querySelector("increase")
increaseDOM.addEventListener("click",clickFunction())



