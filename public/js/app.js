console.log("Client i am here")

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

// fetch('http://localhost:3000/weather?address=visakhapatnam').then((response) => {
//     response.json().then((data) => {
//         if(data.error){
//             console.log(data.error)
//         }else{
//             console.log(data.location)
//             console.log(data.forecast)
//         }
//     })
// })

const weatherForm = document.querySelector('form')

const search = document.querySelector('input')
const messageone = document.querySelector('#message-1')
const messagetwo = document.querySelector('#message-2')
// messageone.textContent = "From JavaScript"

//Created a event listener whenever a submit is clicked then we get the occurs
weatherForm.addEventListener('submit', (e) => {
    //initially the browser gets reloaded for every click to avoid the reload we preventDefault
    e.preventDefault()

    //The search const consist of complete input for example <input type="text" > it shows like this 
    //so to get the value which is inside the input we use value function get the value 
    const location = search.value
    if(location.length == 0){
        return messageone.textContent = "Enter Valid Location"
    }
    messageone.textContent = "Loading data"
    fetch('/weather?address='+location).then((response) => {
        response.json().then((data) => {
            if(data.error){
                messagetwo.textContent = data.error
            }else{
                messageone.textContent = data.location
                messagetwo.textContent = data.forecast
            }
        })
    })
    console.log(location)
})