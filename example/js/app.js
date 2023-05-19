


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