const monitorDOM = document.querySelector("#monitor")

let counter = localStorage.getItem("counterInfo") ? Number(localStorage.getItem("counterInfo")) : 0 

monitorDOM.innerHTML=counter

const increaseDOM = document.querySelector("#increase")
increaseDOM.addEventListener("click", clickFunction)

const decreaseDOM = document.querySelector("#decrease")
decreaseDOM.addEventListener("click", clickFunction)

function clickFunction(){
    this.id == "increase" ? counter ++ : counter --
    monitorDOM.innerHTML = counter
    localStorage.setItem("counterInfo", counter)
    counter = localStorage.getItem("counterInfo")
    
 }


//JSON ile Objekt yapilari ve karmasik yapilari JSON.stringify() ile string e ilk olarak cevirip LocalStorage da Strig
//bir veri olarak tutup sonrasinda JSON.parse() islemi ile tekrardan istedigimiz halde veri olarak alabiliriz!!

//localStorage alaninda kaydedilen bütün verileri localStorage.clear() ile sileriz !!


