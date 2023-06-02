// const todoList = document.querySelector('.todoList')

// fetch('http://68.183.214.2:8000/todo')
// .then((data) => data.json())
// .then((json) => {
//     console.log(json)
//     if(json.data.length){
//         json.data.forEach((item) => {
//             const newTodo = document.createElement('div')
//             newTodo.classList.add("todoItem")
//             newTodo.innerHTML = `<div class="deleteIcon"></div>${item.text}`
//             todoList.append(newTodo)
//             newTodo.addEventListener("click", async() => {
//                 console.log(item.id)
//                 await fetch(`http://68.183.214.2:8000/todo/${item.id}`, {
//                     method: "DELETE"
//                 })
//                 window.location.reload()
//             })
//         })
//     }
// })

// // 0 "" null undef NaN false

// const input = document.querySelector('input')
// const button = document.querySelector('button')

// button.addEventListener("click", async () => {
//     console.log(input.value)
//     await fetch('http://68.183.214.2:8000/todo/', {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({text: input.value})
//     })
//     window.location.reload()
// } )

const cityName = document.querySelector('.cityName')
const temp = document.querySelector('.temp')

const apiKey = 'e417df62e04d3b1b111abeab19cea714'

const citySearch = () => {
    const cityNameValue = document.querySelector(".cityNameValue").value
    console.log(cityNameValue)

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&appid=${apiKey}`)
    .then((data) => data.json())
    .then((json) => {
        console.log(json)
        cityName.innerHTML = json.name
        temp.innerHTML = Math.round(json?.main?.temp - 273) + "&deg" + "C"
    })
}