let settings = {
    userName : "loremIpsum",
    lastname : "jacky",
    isActive : true,
    ip : "127.0.0.1"
}

// Object icerisindeki bilgilerin tek seferde cikarilmasi

// let {userName, lastname,isActive,ip} = settings
// console.log(userName)

// oBJECT ICINDEKI DEGERLERI PARCALARKEN ISIMLERINI DE DEGISTIREBILIRIM !!
let { userName, lastname:nachname,...others} =settings
console.log(nachname)
console.log(others)

console.log(settings)