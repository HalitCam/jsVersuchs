let info1 = document.querySelector("h1#info1")
info1.classList.add("blue")

let note = Number((prompt("Please a lesoon note for evaluation 0-100")))

const SMILE = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
</svg>`

const FROWN = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
</svg>`

function inputEvelaute(s) {
    switch (true) {
        case (s >= 90 && s <= 100):
            return `${SMILE} AA`

        case s >= 85 && s <= 89:
            return `${SMILE} BA`

        case s >= 80 && s <= 84:
            return  `${SMILE} BB`

        case s >= 75 && s <= 79:
            return `${SMILE} CB`

        case s >= 70 && s <= 74:
            return `${SMILE} CC`

        case s >= 65 && s <= 69:
            return `${SMILE} DC`

        case s >= 60 && s <= 64:
            return `${SMILE} DD`

        case s >= 50 && s <= 59:
            return `${SMILE} FD`

        case s >= 0 && s <= 49:
            return `${FROWN} FF`

        default : return "please enter correct interval number !!"
    
    }

}

let info2 = document.querySelector("h1#info2")
info2.innerHTML = `Exam Grade = ${inputEvelaute(note)}`
