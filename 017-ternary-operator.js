// *** ternary operator ile "short if" kullanimi ***

let userName = prompt("Enter your Username")
let info = document.querySelector("#greeting")


//short if kullanimi (ternary) :
// kosul ? dogruysa : degilse  (ozet gösterim)

info.innerHTML = `${userName.length>0 ? userName : "Kullanici Bilginiz Bulunamadi"}`
info.classList.add("color") // class ekledim