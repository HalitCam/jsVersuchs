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
let domain = email.slice(email.search("@")+1, email.indexOf("."))
console.log ("Domain Bilgisi:" , domain)

// String veri icindeki veriyi degistirme

console.log(email)
email= email.replace("gmail", "alev")
console.log(email)

// Istedigim verinin olup olmadigi true/false .includes()

let decide= email.includes("@")
console.log(decide)

// Istedigim sey ile bitti mi? Basladi mi? endsWith() , startsWith

console.log("halit ile e mail adresim basliyor mu? " , email.startsWith("halit"))
console.log("e mail adresim alev.com ile bitiyor mu?" , email.endsWith("alev.com"))
console.log(email)

// userName in bas harfini sadece büyük yapma
userName = userName.toUpperCase()
console.log(userName)

let fullName = ` ${ userName[0].toUpperCase()+ userName.slice(1).toLowerCase} ${ lastName.toUpperCase()} `
console.log(fullName)