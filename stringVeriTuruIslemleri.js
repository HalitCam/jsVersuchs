let userName = "halit"
let email = "hlt@gmail.com"
let lastName = "CAM"

// String veri üzerinden karakte secmek
let firstLetter = userName[0]
console.log("First Letter :",firstLetter)

console.log("Second Methode :", userName.charAt(0))

/* Büyük Harf kücük Harf */

userName= userName.toUpperCase()
console.log("Büyük Harf: " ,userName)

userName = userName[0]+ userName.slice(1).toLowerCase()
console.log("Correct Writing: ", userName)

// String icerisinde istedigimiz bilgiyi bulmak ve aratmak icin COK ÖNEMLI !!!

console.log("location of @ : " , email.search("@"))
let Domain = email.slice(email.indexOf("@")+1, email.search("."))
console.log(Domain)
