




// // // // // // // // const people = {
// // // // // // // //     John: {
// // // // // // // //         age: 25,
// // // // // // // //         parents: {
// // // // // // // //             Tony: {
// // // // // // // //                 age: 55,
// // // // // // // //                 parents: {
// // // // // // // //                     Jake: {
// // // // // // // //                         age: 80,
// // // // // // // //                             parents: {
// // // // // // // //                                 Jake2: {
// // // // // // // //                                 age: 80
// // // // // // // //                             }
// // // // // // // //                 }
// // // // // // // //                     }
// // // // // // // //                 }
// // // // // // // //             },
// // // // // // // //             Kelly: {
// // // // // // // //                 age: 50
// // // // // // // //             }
// // // // // // // //         }
// // // // // // // //     },
// // // // // // // //     Sam: {
// // // // // // // //         age: 15,
// // // // // // // //         parents: {
// // // // // // // //             Din: {
// // // // // // // //                 age: 40
// // // // // // // //             }
// // // // // // // //         }
// // // // // // // //     },
// // // // // // // // }

// // // // // // // // const parentsList = (obj) => {
// // // // // // // //     if(obj.parents){
// // // // // // // //         for(let key in obj.parents){
// // // // // // // //             console.log(key)
// // // // // // // //             parentsList(obj.parents[key])
// // // // // // // //         }
// // // // // // // //     }else{
// // // // // // // //         console.log("...ops")
// // // // // // // //     }
// // // // // // // // }

// // // // // // // // for(let key in people){
// // // // // // // //     parentsList(people[key])
// // // // // // // // }

// // // // // // // console.log(1)
// // // // // // // console.log(2)
// // // // // // // console.log(3)
// // // // // // // console.log(4)
// // // // // // // console.log(5)
// // // // // // // // console.log()


// // // // // // // const btn = document.querySelector("button")

// // // // // // // btn.addEventListener("click", () => {
// // // // // // //     console.log('1')
// // // // // // // })

// // // // // // // console.log(2)

// // // // // // // setTimeout(() => {console.log("a")}, 1000)
// // // // // // // console.log(2)


// // // // // // setTimeout(() => {
// // // // // //     console.log(0)
// // // // // // },0)
// // // // // // setTimeout(() => {
// // // // // //     console.log(1)
// // // // // // },1000)
// // // // // // setTimeout(() => {
// // // // // //     console.log(2)
// // // // // // },2000)
// // // // // // setTimeout(() => {
// // // // // //     console.log(3)
// // // // // // },3000)

// // // // // // console.log("a")
// // // // // // console.log("b")
// // // // // // console.log("c")

// // // // // // setTimeout(() => {
// // // // // //     console.log("a")
// // // // // // }, 1000)

// // // // // // setTimeout(() => {
// // // // // //     console.log("1")
// // // // // // }, 1000)

// // // // // let i = 0
// // // // // const interval = setInterval(() => {
// // // // //     console.log(++i)
// // // // // }, 1000)

// // // // // // setTimeout(() => clearInterval(interval), 6000)

// // // // // const btn = document.querySelector("button")

// // // // // btn.addEventListener("click", () => {
// // // // //     clearInterval(interval)
// // // // // })


// // // // const block = document.querySelector('.block')

// // // // let positionX = 0
// // // // let positionY = 0

// // // // const handleBlockMove = () => {
// // // //     if(positionX <= 440){
// // // //         positionX += 16
// // // //         block.style.left = `${positionX}px`
// // // //         setTimeout(handleBlockMove, 100)
// // // //     }else if(positionY <= 440){
// // // //         positionY += 16
// // // //         block.style.top = `${positionY}px`
// // // //         setTimeout(handleBlockMove, 100)
// // // //     }
// // // // }

// // // // handleBlockMove()

// // // const alertDoHomework = (subject = "js", callback = () => {alert("A")}) => {
// // //     alert(`Starting my ${subject} homework`)
// // //     callback()
// // // }

// // // const alertFinished = () => {
// // //     alert("DONEEE!!!")
// // // }

// // // alertDoHomework(undefined, alertFinished)


// // // const arr = [1, 2, 3, 4, 5, 6]

// // // const res = arr.pop()

// // // console.log(arr)
// // // console.log(res)


// // // const arr = [1, 2, 3, 4, 5, 6]

// // // const res = arr.shift()

// // // console.log(arr)
// // // console.log(res)

// // const arr = [1, 2, 3, 4, 5, 6]

// // arr.unshift(0)
// // arr.push(7)

// // const res = arr.slice(3, 4)
// // const resSplice = arr.splice(3, 4)

// // console.log(arr, "array")
// // console.log(res, "slice")
// // console.log(resSplice, "splice")

// const monthArr = ["Январь", "Февраль", "Март", "Апрель"]

// // monthArr.forEach((item, i) => {
// //     console.log(item, i)
// // })

// const newMonthArr = monthArr.map((item, i) => {
//     return item + " месяц"
// })

// console.log(newMonthArr)
// console.log(monthArr)

// const colors = ["red", "green", "blue", "yellow"]

// const wrapper = document.querySelector(".extraWrapper")

// monthArr.forEach((item, i) => {
//     const block = document.createElement("div")
//     block.style.width = '200px'
//     block.style.height = '50px'
//     block.style.border = '1px solid' 
//     block.style.backgroundColor = colors[i]

//     block.innerText = item
//     wrapper.append(block)
// })


const fruitArr = ["apple", "banana", "watermelon", "peach"]

const res = fruitArr.filter((item) => {
    return item.length > 5
})

console.log(res)