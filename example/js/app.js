


const tabsContent = document.querySelectorAll(".tabcontent")
const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")

const hideTabContent = () => {
    tabsContent.forEach((item) => {
        item.style.display = "none"
    })
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
}

const showTabContent = (i = 0) => {
    tabsContent[i].style.display = "block"
    tabs[i].classList.add("tabheader__item_active")
}

hideTabContent()
showTabContent()

tabsParent.addEventListener("click", (e) => {
    const target = e.target

    if(target.classList.contains("tabheader__item")){
        tabs.forEach((item, i) => {
            if(item === target){
                // console.log(i)
                hideTabContent()
                showTabContent(i)
            }
        })
    }
})

//slider 


const modal = document.querySelector(".modal")
const modalOpenBtn = document.querySelector(".btn_white")
const modalCloseBtn = document.querySelector(".modal__close")

const handleOpenModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}

const handleCloseModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}

modalOpenBtn.addEventListener("click", handleOpenModal)
modalCloseBtn.addEventListener("click", handleCloseModal)

modal.addEventListener("click", (e) => {
    if(e.target.classList.contains("modal")){
        handleCloseModal()
    }
})


// request 

const forms = document.querySelectorAll("form")

const postData = (form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const formData = new FormData(form)

        const obj = {}

        formData.forEach((item, name) => {
            obj[name] = item
        })
        const json = JSON.stringify(obj)

        const request = new XMLHttpRequest()
        request.open("POST", "server.php")
        request.setRequestHeader("Content-Type", "application/json")
        request.send(json)
    } )
}

forms.forEach((item) => {
    postData(item)
}) 