// // // // let a = 1
// // // // const b = 1

// // // // a = 2
// // // // b = 2

// // // // console.log(a)
// // // // console.log(b)

// // // // const obj = {
// // // //     key: 'value'
// // // // }
// // // // obj.key = 1

// // // // console.log(obj)

// // // // const obj = {
// // // //     key1: 1
// // // // }

// // // // obj = {
// // // //     key2: 2
// // // // }

// // // // == ===

// // // // console.log(1 == "1")//сравнивает только занчения true
// // // // console.log(1 === "1")//сравнивает еще и тип false
// // // // console.log({} === {})
// // // // console.log([] == [])

// // // //str num bool arr obj null undef

// // // // if(!"Hello"){
// // // //     console.log("true")
// // // // }else{
// // // //     console.log("false")
// // // // }

// // // // 0 "" null undef NaN false

// // // // console.log(Boolean(0))
// // // // console.log(!!-1)
// // // // console.log(Number("1"))
// // // // console.log(+"1")

// // // class Human {
// // //   constructor(name) {
// // //     this.name = name;
// // //   }
// // //   say() {
// // //     console.log(this.name);
// // //   }
// // // }

// // // const human = new Human("Alex");
// // // const human2 = new Human("Jake");

// // // console.log(human);
// // // console.log(human2);
// // // human.say();
// // // human2.say();

// // //REG EXP

// // // const string = prompt("Say ur name!!!");

// // // // const regExp = /[Aa]/;
// // // // const regExp = /a/i;
// // // const regExp = new RegExp("a", "i");

// // // console.log(string.match(regExp));

// // // const letter = "AaaaaabbbbbBcccCDdddd";

// // // console.log(letter.split(""));
// // // const regExp = /b/gi;

// // // console.log(letter.match(regExp));

// // const numbers = "1as23Dd567asdasd890SS123sdsdsd456";

// // // const regExp = /[3-6]/g;
// // // const regExp = /\d/g;
// // // const regExp = /[0-9A-Za-z]/g;
// // const regExp = /\w/g;

// // // console.log(numbers.match(regExp));
// // console.log(numbers.replace(regExp, "*"));

// const phoneInput = document.querySelector("#phoneInput");
// const phoneCheck = document.querySelector(".phoneCheck");
// const phoneResult = document.querySelector(".phoneResult");

// const phoneRegExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/;

// phoneCheck.addEventListener("click", () => {
//   if (phoneRegExp.test(phoneInput.value)) {
//     phoneResult.innerText = "ok :)";
//     phoneResult.style.color = "violet";
//   } else {
//     phoneResult.innerText = "not ok >:(";
//     phoneResult.style.color = "red";
//   }
// });

let i = 0;

const count = () => {
  i++;
  console.log(i);
  if (i < 100) {
    count();
  }
};

count();
