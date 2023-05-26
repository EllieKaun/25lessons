

// // // // // // // // const people = {
// // // // // // // //     John: {
// // // // // // // //         age: 25,
// // // // // // // //         parents: {
// // // // // // // //                 Tony: {
// // // // // // // //                     age: 60
// // // // // // // //                 },
// // // // // // // //                 Kelly: {
// // // // // // // //                     age: 55
// // // // // // // //                 }
// // // // // // // //         }
// // // // // // // //     },
// // // // // // // //     Sam: {
// // // // // // // //         age: 20,
// // // // // // // //         parents: {
// // // // // // // //             Din: {
// // // // // // // //                 age: 45,
// // // // // // // //                 parents: {
// // // // // // // //                     Alex: {
// // // // // // // //                         age: 70,

// // // // // // // //                 parents: {
// // // // // // // //                     Alex: {
// // // // // // // //                         age: 70,

// // // // // // // //                 parents: {
// // // // // // // //                     Alex: {
// // // // // // // //                         age: 70,

// // // // // // // //                 parents: {
// // // // // // // //                     Alex: {
// // // // // // // //                         age: 70
// // // // // // // //                     }
// // // // // // // //                 }
// // // // // // // //                     }
// // // // // // // //                 }
// // // // // // // //                     }
// // // // // // // //                 }
// // // // // // // //                     }
// // // // // // // //                 }
// // // // // // // //             }
// // // // // // // //         }
// // // // // // // //     },
// // // // // // // // }

// // // // // // // // // const key = "John"

// // // // // // // // // console.log(people[key].parents)

// // // // // // // // const parentList = (obj) => {
// // // // // // // //     if(obj.parents){
// // // // // // // //         for(let key in obj.parents){
// // // // // // // //             console.log(key)
// // // // // // // //             parentList(obj.parents[key])
// // // // // // // //         }
// // // // // // // //     }else{
// // // // // // // //         console.log("...oops")
// // // // // // // //     }
// // // // // // // // }

// // // // // // // // for(let key in people){
// // // // // // // //     parentList(people[key])
// // // // // // // // }

// // // // // // // console.log(1)
// // // // // // // console.log(2)
// // // // // // // console.log(3)
// // // // // // // console.log(4)
// // // // // // // console.log(5)

// // // // // // // const button = document.querySelector("button")

// // // // // // // button.addEventListener("click", () => {
// // // // // // //     console.log("a")
// // // // // // // })

// // // // // // // console.log("1")

// // // // // // // setTimeout(() => {
// // // // // // //     console.log("1")
// // // // // // // }, 1000)

// // // // // // // console.log("a")

// // // // // // // setTimeout(() => {
// // // // // // //     console.log("a")
// // // // // // // }, 1000)

// // // // // // // setTimeout(() => {
// // // // // // //     console.log("1")
// // // // // // // }, 999)

// // // // // // setTimeout(() => {
// // // // // //     console.log("0")
// // // // // // }, 0)
// // // // // // setTimeout(() => {
// // // // // //     console.log("1")
// // // // // // }, 1000)
// // // // // // setTimeout(() => {
// // // // // //     console.log("2")
// // // // // // }, 2000)
// // // // // // setTimeout(() => {
// // // // // //     console.log("3")
// // // // // // }, 3000)

// // // // // // console.log("a")
// // // // // // console.log("b")
// // // // // // console.log("c")

// // // // // const interval = setInterval(() => {
// // // // //     console.log("interval")
// // // // // }, 1000)

// // // // // // setTimeout(() => clearInterval(interval), 5000)
// // // // // const button = document.querySelector("button")

// // // // // button.addEventListener("click", () => {
// // // // //     clearInterval(interval)
// // // // // })

// // // // const block = document.querySelector(".block")

// // // // let positionX = 0
// // // // let positionY = 0

// // // // const handleBlockMove = () => {
// // // //     if(positionX <= 440){
// // // //         positionX += 16
// // // //         block.style.left = `${positionX}px`
// // // //         setTimeout(handleBlockMove, 100)
// // // //     }else if(positionY <= 440) {
// // // //         positionY += 16
// // // //         block.style.top = `${positionY}px`
// // // //         setTimeout(handleBlockMove, 100)
// // // //     }
// // // // }

// // // // handleBlockMove()

// // // const alertDoHomework = (subject = "js", callback = () => {alert("AAAAAAA")}) => {
// // //     alert(`Starting my ${subject} homework`)
// // //     callback()
// // // }

// // // const alertFinished = () => {
// // //     alert("DONNEEEE!!!!!!")
// // // }

// // // alertDoHomework(undefined, alertFinished)

// // // const arr = [1, 2, 3, 4, 5, 6]

// // // console.log(arr)


// // // class Arrrr{
// // //     constructor(){

// // //     }
// // //     methods(){}
// // // }


// // const arr = [1, 2, 3, 4, 5, 6]
// // console.log(arr, "original arr")

// // const res = arr.pop()

// // console.log(arr, "after pop")
// // console.log(res, "pop")

// // const res2 = arr.shift()

// // console.log(arr, "after shift")
// // console.log(res2, "shift")

// // arr.push("hello")

// // console.log(arr, "after push")

// // arr.unshift("world")

// // console.log(arr, "after unshift")

// // const res3 = arr.splice(2, 3)

// // console.log(arr, "after splice")
// // console.log(res3, "splice")

// // const res4 = arr.slice(1, 2)
// // console.log(arr, "after slice")
// // console.log(res4, "slice")


// // const monthArr = ["Январь", "Февраль", "Март", "Апрель", "Май"]

// // const newMonthArr = monthArr.forEach((item, i) => {
// //     // console.log(item, i)
// //     return item + " месяц"
// // })

// // const newMonthArr = monthArr.map((item, i) => {
// //     // console.log(item, i)
// //     // return item + " месяц"
// // })

// // console.log(monthArr)
// // console.log(newMonthArr)

// const wrapper = document.querySelector('.extraWrapper')

// const monthArr = ["Январь", "Февраль", "Март", "Апрель", "Май"]

// const colors = ["red", "green", "blue", "yellow", "violet"]

// monthArr.forEach((item, i) => {
//     const block = document.createElement("div")
//     block.style.width = "200px"
//     block.style.height = "50px"
//     block.style.border = "1px solid"
//     block.style.backgroundColor = colors[i]

//     block.innerText = item

//     wrapper.append(block)
// })

const fruits = ["apple", "banana", "watermelon", "peach"]

const res = fruits.filter((item) => {
    return item.length > 5
    // if(item.length > 5){
    //     .push(item)
    // }
})

console.log(fruits)
console.log(res)