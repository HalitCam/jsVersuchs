
let items = [ 1 , 2 , "mustafa"]

console.log(Array.isArray(items)) // typeof una arrayin bakma // true

console.log(items) //thanks to pop() can i take last value of Array 
let lastItem = items.pop()
console.log("lastItem= ", lastItem, "items: ", items )

items.push(4) // 4 sayisi Array a eklenir(sona)
console.log(items)

let firstValue = items.shift() // shift() ile Array in ilk elemani silinir ve elemani yakayabilirim
console.log(firstValue)
console.log(items)

items.unshift(false) // Array e unshift ile en basa eleman ekliyorum
console.log(items) // items = [false, 2, 4]

items.splice(1,1) //Ilk parametre islemin hangi indexten basliyarak yapilacagi index numarasi
console.log(items) //ikinci parametre ise kac elemanin silinecegini belirtir
//splice metodu ile ve diger silme ARRAY METODLARI iLE SILDIKLERIMI YAKALAYABILRIIM 1

// Dizilerden pop(), shift() ve splice() metotlari ile eleman silebiliriz!

let lengthData = items.unshift(1,2,3)
console.log(items)
console.log(lengthData)

let deleteData = items.splice(0,3,"First3DatasDeleted") // Burada 0. index ten basliyarak 3 eleman silindi ve onlarin yerine
// 3. parametre eklendi !!
console.log("deleted : ", deleteData, "itemsRemain : ", items )

