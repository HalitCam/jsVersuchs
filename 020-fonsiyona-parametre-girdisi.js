// Fonk Parametre Almak ve Geri Dönüs Almak

function greetings(firstname,lastname){
    // console.log(`Merhaba ${firstname ? firstname : " "}`)
    return `Merhaba ${firstname } ${lastname}`
}

greetings()

function DOMideWrite(id,info){
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

let htmlInfo = `<span style= "color:red"> Color REDDD </span>`
DOMideWrite("info2", htmlInfo)
