// .json dosyalarinda Object notation tarzinda veri tanimlarken
// key degerleri tirnak icerisinde string olarak tanimlanmali !!
// value number or boolean olabilir
// .json dosyasini fetch()-veri cekmek/getirmek- .js dosyasinda cagirabilirim !!

// fetch("/44-setting.json").then(response =>{
//     return response.json()}
// ).then(responseJson => {
//     console.log(responseJson.userName)
// })

const ulDOM = document.querySelector("#userList")
let index = 1


fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
    return response.json()}).then(responseJson => {
    responseJson.forEach(user => {
        const liDOM = document.createElement("li")
        liDOM.classList = "list-group-item"
        liDOM.innerHTML = `User : ${index} Comment : ${responseJson.title}`
        ulDOM.append(liDOM)
        index++
    });
    })

fetch("https://www.haberler.com/").then(response =>{ 
return response.json()}).then(responseJson => {
    console.log(responseJson)
})