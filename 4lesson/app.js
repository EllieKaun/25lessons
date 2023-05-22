// // const obj = {
// //     name: 'Alex',
// //     age: 21
// // }

// // console.log(obj)

// // const data = JSON.stringify(obj)

// // console.log(data, "stringify data")
// // console.log(JSON.parse(data), "parse data")

// // const arr = [1, 2, 3, 4, 5, 6, 7]

// // console.log(JSON.parse(JSON.stringify(arr)))

// const btn = document.querySelector(".reqBtn")

// btn.addEventListener("click", () => {
//     const request = new XMLHttpRequest() //создание запроса
//     request.open("GET", "data.json") //объявление метода и пути запроса
//     request.setRequestHeader("Content-Type", "application/json") //добавление заголовка
//     request.send() //отправка зарпроса

//     request.addEventListener("load", () => {
//         // console.log(request.response) //вывод ответа
//         const data = JSON.parse(request.response) // обработка ответа
//         console.log(data)
//         document.querySelector(".name").innerHTML = data.name
//         document.querySelector(".age").innerHTML = data.age
//     })
// })


// string number boolean null undefiend - primitive
// obj, arr = obj (links)

// const num = 5
// const num2 = num + 10

// console.log(num)
// console.log(num2)

// const obj = {
//     name: "Alex", 
//     id: 1
// }

// // const obj2 = { ...obj }
// const obj2 = JSON.parse(JSON.stringify(obj)) //deep copy

// obj2.name = "John"

// console.log(obj)
// console.log(obj2)


// const myFunc = (arg, ...arg2) => {
//     console.log(arg, "1")
//     console.log(arg2, "2")
// }

// myFunc("a", "b", "c")


// const [one, ...two] = ["1", "2", "3", "4", "5"]

// console.log(one)
// console.log(two)

// const [one, two, three, four] = "one two three four".split(" ")

// console.log(one)
// console.log(two)
// console.log(three)
// console.log(four)


const btn = document.querySelector(".reqBtn")
const wrapper = document.querySelector(".wrapper")

btn.addEventListener("click", () => {
    const request = new XMLHttpRequest() //создание запроса
    request.open("GET", "https://pokeapi.co/api/v2/pokemon/") //объявление метода и пути запроса
    request.setRequestHeader("Content-Type", "application/json") //добавление заголовка
    request.send() //отправка зарпроса

    request.addEventListener("load", () => {
        // console.log(request.response) //вывод ответа
        const data = JSON.parse(request.response) // обработка ответа
        data.results.forEach((item) => {
            console.log(item.name)
            const block = document.createElement("div")
            block.innerText = item.name
            block.style.width = "200px"
            block.style.height = "50px"
            block.style.border = "1px solid"
            wrapper.append(block)
        })
    })
})


// создать JSON в котором будет массив из 20 объектов
// внутри объекта должны быть ключи img, price, description
// сделать запрос на этот файл и отобразить также как и waildbrries