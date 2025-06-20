
const userListDOM = document.querySelector("#userList")

let users = ["lorem", "Ipsum", "Dolar"]

// let counter = 0;
// for (;counter<users.length;counter++){
//     if(users[counter] === "Ipsum") break //continuee
//     console.log(users[counter])
// }

const PRODUCTS = ["Mic", "Cable", "Speaker", "DESKTOP PC","Keyboard"]

// PRODUCTS.forEach(items=> console.log(items) )

// const NEW_PRODUCTS = PRODUCTS.filter(item=>item.length>5) // fliter() ve maps() methodlari ile yeni bir dizi olusturulabilinir !
// console.log(NEW_PRODUCTS)


let infoUsers = [
    {userName: "Hakan", isActive: false },
    {userName: "Emre", isActive: true}
]

let newInfo = infoUsers.filter(user =>user.userName === "Hakan")
console.log(newInfo) // map() Array methodu ile forEach() methodu  gibi tüm elemanlari gezer tek far yeni bir Array olusturur !!

let newUsers = users.map(user => user.toUpperCase())
console.log(newUsers)