// // // // setTimeout(() => {
// // // //   console.log("1");
// // // //   setTimeout(() => {
// // // //     console.log("2");
// // // //     setTimeout(() => {
// // // //       console.log("3");
// // // //       setTimeout(() => {
// // // //         console.log("3");
// // // //         setTimeout(() => {
// // // //           console.log("3");
// // // //           setTimeout(() => {
// // // //             console.log("3");
// // // //             setTimeout(() => {
// // // //               console.log("3");
// // // //               setTimeout(() => {
// // // //                 console.log("3");
// // // //               }, 1000);
// // // //             }, 1000);
// // // //           }, 1000);
// // // //         }, 1000);
// // // //       }, 1000);
// // // //     }, 1000);
// // // //   }, 1000);
// // // // }, 1000);

// // // console.log("start");

// // // setTimeout(() => {
// // //   const product = {
// // //     name: "Phone",
// // //     price: 4000,
// // //   };
// // //   console.log(product, "product");
// // //   setTimeout(() => {
// // //     product.isModified = true;
// // //     console.log(product, "product modified");
// // //     setTimeout(() => {
// // //       product.status = "ordered";
// // //       console.log(product, "product ordered");
// // //     }, 2000);
// // //   }, 2000);
// // // }, 2000);

// // // console.log("start");

// // // const req = new Promise((resolve, reject) => {
// // //   setTimeout(() => {
// // //     const product = {
// // //       name: "Phone",
// // //       price: 4000,
// // //     };
// // //     console.log(product, "product");
// // //     resolve(product);
// // //   }, 2000);
// // // });

// // // req.then((product) => {
// // //   const req2 = new Promise((resolve, reject) => {
// // //     setTimeout(() => {
// // //       product.isModified = true;
// // //       console.log(product, "product modified");
// // //       resolve();
// // //     }, 2000);
// // //   });

// // //   req2.then(() => {
// // //     setTimeout(() => {
// // //       product.status = "ordered";
// // //       console.log(product, "product ordered");
// // //     }, 2000);
// // //   });
// // // });

// // console.log("start");

// // const req = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     const product = {
// //       name: "Phone",
// //       price: 4000,
// //     };
// //     console.log(product, "product");
// //     resolve(product);
// //   }, 2000);
// // });

// // req.then((product) => {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       product.isModified = true;
// //       console.log(product, "modified");
// //       resolve();
// //       reject();
// //     }, 2000);
// //   })
// //     .finally(() => {
// //       console.warn("finally");
// //     })
// //     .then(() => {
// //       setTimeout(() => {
// //         product.status = "ordered";
// //         console.log(product, "ordered");
// //       }, 2000);
// //     })
// //     .catch(() => {
// //       console.error("error");
// //     });
// // });

// fetch("https://jsonplaceholder.typicode.com/todos/199")
//   .then((response) => {
//     return response;
//   })
//   .then((data) => (data.status < 400 ? data.json() : "error"))
//   .then((json) => console.log(json))
//   .catch((e) => console.error(e))
//   .finally(() => console.warn("finally"));

// // const myFunc = () => 5;

// // console.log(myFunc());
