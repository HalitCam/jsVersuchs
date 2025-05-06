// String bilgileri int ve float a donusturmek
let number1="11"
console.log("number1: ", parseInt(number1)," typeOfData :", typeof(parseInt(number1))) // parseInt() funktion converts String to a number

// Other Example
let number2="11px"
number2=parseInt(number2)
console.log("number2: ", number2)," typeOfData :", typeof((number2))

// number veri tipinden string e donusturmek
let number5=55
number5=number5.toString()
console.log(number5, typeof(number5))

//NAn = Not-A-Number //isNaN() YÖNTEMI ILE
/* parseInt() String bir ifarde icerisindeki sayilari alararak number a dönüsturur. Ör: 11px -> 11 VE SADECE SAYI ILE BASLAMAK ZORUNDA!!!
   number() sadece icerisinde sayi olan String ifadeleri number a dönüstürür. */

/* parseFloat() */

console.log(12/"5")
