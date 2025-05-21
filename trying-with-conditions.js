let info1 = document.querySelector("h1#info1")
info1.classList.add("blue")

let note = Number((prompt("Please a lesoon note for evaluation 0-100")))
inputEvelaute(note)

function inputEvelaute(s) {
    switch (s) {
        case s >= 90 && s < 100:
            return "AA"

        case s >= 85 && s < 89:
            return "BA"

        case s >= 80 && s < 84:
            return "BB"

        case s >= 75 && s < 79:
            return "CB"

        case s >= 70 && s < 74:
            return "CC"

        case s >= 65 && s < 69:
            return "DC"

        case s >= 60 && s < 64:
            return "DD"

        case s >= 50 && s < 59:
            return "FD"

        case s >= 0 && s < 49:
            return "AA"
        default : inputEvelaute(prompt("Please again a Lesson Note 0-100 !!!")) 
        break

    
    }

}