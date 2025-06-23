let item = {}
let item1 = new Object()

let item2 = {
    obj:1,
    idInfo : 2959526
}

let countries = new Object()
console.log("countries : ", countries)

countries.continent = "africa";
countries.language = "french"
console.log(countries)

console.log(countries["language"]) // Other Usage of key with String

// new Data added to Object
countries.location = "west"
console.log(countries["location"])

// to reach to keys     Object.keys()
keys = Object.keys(countries)

// to reach to values     Object.values()
console.log(Object.values(countries))

keys.forEach(item => {
    console.log(item)
});

// JSON Veri Tipini Obje Olarak Kullanmak

/*
Değişmeyen ve statik olarak kullanmanız gereken verileri JSON derslerinde de anlatıldığı gibi ".json "dosya eklentisi ile bir dizinde 
kaydedip uygulamanızda bu değişmeyen verilerden yararlanmak isteyebilirsiniz.

*/

// Object.entries(obj) – [key, value] çiftlerinden oluşan bir array döner. 
console.log(Object.entries(countries))

/* 
let stringObject = JSON.stringify(person);

let newPerson = JSON.parse(stringObject); 
// parse methodu da stringtify methodunun tersi olarak çalışır ve stringi objeye çevirir
*/

// Array kopyalamak --> slice(), [.. ES6] - ORJINAL DIZI DEGISMEZ !!
let items = ["merhaba", 1 , 2 , 3]
let items2 = ["ali", "burcu"]

newItem1 = items.slice(0,2)
console.log("newItem1 : ", newItem1)
console.log("items : ",items)

newItem2 = [...items] // can be copied to an array using the destruction method
console.log("newItem2 :" , newItem2)
console.log("items : ",items)

//items ve items2 dizilerini es6 ile(...) cok basit birlestirebilirim !!
mixItems = [...items, ...items2]
console.log("mixItems: ",mixItems)

// Array icerisindeki bilgiyi tek bir deger olarak Stringe cevirmek --> toString, join
newData = items.toString()
console.log("newData: " , newData, "length: ", newData.length)
newData2 = items.join(" ")
console.log(newData2)
// Math.floor() methodu ile sayiyi asagi yuvarlarim !!
