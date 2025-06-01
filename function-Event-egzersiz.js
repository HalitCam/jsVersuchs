localStorage.getItem("counter") ? counter = Number(localStorage.getItem("counter")) : counter = 0

const decreaseDOM = document.querySelector( "#decrease")
decreaseDOM.addEventListener("click", clickFunction)

const increaseDOM = document.querySelector("#increase")
increaseDOM.addEventListener("click", clickFunction)

const counterDOM = document.querySelector ("#counter")


function clickFunction() {
    this.id == "increase"? counter ++ : counter --
    counterDOM.innerHTML = counter
    localStorage.setItem("counter",counter)
    counter = Number(localStorage.getItem("counter"))
}









