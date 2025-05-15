// **** Liste icerisindeki son elemana ulasmak veya eleman eklemek *******

let item = document.querySelector("ul#list>li:last-child ")
console.log(item)
console.log(item.innerHTML)

// *** Listeye Öge eklem/cikarma ****

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement ("li")

liDOM.innerHTML = "Kendi Olusturdugumuz Oge"

ulDOM.append(liDOM)  // En sona eklemek

ulDOM.prepend (liDOM) // En basa eklemek