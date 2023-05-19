




// // const arr = [1, 2, 3, 4, 5, 6]

// //[1, 2]
// //[1, 2, 3, 4]

// // arr.pop()
// // arr.push("11")
// // arr.shift()
// // arr.unshift("0")
// // // const res = arr.slice(3, 2)
// // const res = arr.splice(3, 2)
// // console.log(res)
// // console.log(arr)


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// const arr2 = arr.forEach((item, i) => {
//     // console.log(item, i)
//     return item + 2
// })
// console.log(arr2)

// const newArr = arr.map((arbuz, i) => {
//     // console.log(arbuz, i)
//     return arbuz + 2
// })
// console.log(arr)
// console.log(newArr)

// const string = "1234567890"

// console.log(string.split("").reverse().join(""))

// const arr = [3, 18, 5, 99, 103, 13]

// const res = arr.reduce((prev, curr) => {
//     console.log(prev, "prev", curr, "curr")
//     return prev + curr
// })

// console.log(res)


// const let var


// function myFunc() {
//     var x = 1
//     console.log(x, "a")
//     // if(true){
//     //     var x = 2 //та же самая переменная
//     //     console.log(x, "b")
//     // }
//     function myFunc2() {
//         var x = 2 //другая переменная 
//         console.log(x, "b")
//     }
//     myFunc2()
//     console.log(x, "c")
// }

// // myFunc()

// const letTest = () => {
//     const x = 1
//     console.log(x, "a")
//     if(true){
//         const x = 2
//         console.log(x, "b")
//     }
//     console.log(x, "c")
// }
// letTest()

// const btns = document.querySelectorAll("button")
// // console.log(btns)

// btns.forEach((item) => {
//     // console.log(item)
//     item.addEventListener("click", (event) => {
//         // if(event.target.classList.contains('red')){
//         //     event.target.classList.remove('red')
//         // }else{
//         //     event.target.classList.add('red')
//         // }
//         event.target.classList.toggle("red")
//     })
// })

const wrapper = document.querySelector(".wrapper")
const newBtn = document.createElement("button")
newBtn.innerText = "7"

wrapper.append(newBtn)


wrapper.addEventListener("click", (e) => {
    // console.dir(e.target)
    if(e.target.tagName === "BUTTON"){
        e.target.classList.toggle("red")
    }else{
        console.log("it's not a button")
    }
})