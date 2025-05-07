let username = "halit"
const DOMAIN = "trendstar.de"

let email = username+ "@" + DOMAIN
console.log("Merhaba", username, "sitemize hosgeldin", "mail aderesin", email )

let info = ` Merhaba ${username} sitemize hosgeldiniz.. mail adresin: ${email}

kullanici mail adresinin uzunlugu : ${email.length}
gunun saat bilgisi: ${new Date().getHours()}
BORCUNUZ: ${(4+5)*3} TL
`
console.log(info)

// Template Literals back tick kullanilarak yapilir ve ${} ifadeleri ile degiskenler einfach kullanilabilir