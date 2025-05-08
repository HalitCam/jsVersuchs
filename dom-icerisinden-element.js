// getElementById ile DOM elementlerine ulasilabilir
// querySelector ile de ayni islem yapilabilinir. Birden fazla eleman olsada sadece bir tane secim yapar !!!



let title = document.getElementById(`title`)
console.log(title)
title.innerHTML= "Degisen Bilgi"
console.log(title.innerHTML)

let link = document.querySelector("ul#list>li>a")
console.log(link)
console.log(link.innerHTML)
link.innerHTML += " degisti"
link.style.color = "red"
link.classList.add("btn") 
