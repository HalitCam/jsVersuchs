let price= 100;
let user = "hakan";

// *** Karsilastirma ve Mantiksal Operatorler***

// Degeri Esitse ==
console.log(100 == "100") // true dönecek

// Hem degeri hem de türü esitse ===
console.log(100 === "100") //false dönecek#

// && ve operatörü
console.log( price && user != "guest") // burada "price" bilgisi olsun VE user bilgisi esit olmasin "guest e diyor" // True döner

// || veya operatorü
console.log( price>10 || user != "guest") // burada "price" bilgisi olsun VE user bilgisi esit olmasin "guest e diyor" // True döner

// ! degil (tersi) not operatörü
console.log( price>10 && !user == "guest") 

console.log(!!2)
