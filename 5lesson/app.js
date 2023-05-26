const som = document.querySelector("#som")
const usd = document.querySelector("#usd")

// som.addEventListener("input", (e) => {
//     const request = new XMLHttpRequest()
//     request.open("GET", "data.json")
//     request.setRequestHeader("Content-Type", "application/json")
//     request.send()

//     request.addEventListener("load", () => {
//         const data = JSON.parse(request.response)

//         usd.value = (e.target.value / data.usd).toFixed(2)
//     })
// })


const convert = (elem, target, isTrue) => {
    elem.addEventListener("input", () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-Type", "application/json")
        request.send()

        request.addEventListener("load", () => {
            const data = JSON.parse(request.response)
            isTrue ?
                target.value = (elem.value / data.usd).toFixed(2)
            :
                target.value = (elem.value * data.usd).toFixed(2)

            elem.value === "" && (target.value = "")
        })
    })
}

convert(som, usd, 42)
convert(usd, som, "")


// console.log(true && false) //1 * 0 = 0
// console.log(false && true) //0 * 1 = 0

// console.log(true || false) //1 + 0 = 1
// console.log(false || true) //0 + 1 = 1