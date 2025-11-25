// dav1
// function expo(number, power, cb) {
//   if (power === 0) {
//     return cb(1);
//   } else {
//     return expo(number, power - 1, (result) => cb(number * result));
//   }
// }
// const a = expo(5, 0, (result) => result);
// console.log(a);

// dav2
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     const postsContainer = document.getElementById("posts");

//     data.forEach((post) => {
//       const div = document.createElement("div");
//       div.innerHTML = `
//         <h3>${post.title}</h3>
//         <p>${post.body}</p>
//         <hr>
//       `;
//       postsContainer.appendChild(div);
//     });
//   })
//   .catch((error) => console.log("Error:", error));

async function kopireba(obj) {
  const jsonStringi = await Promise.resolve(JSON.stringify(obj));
  const axali = await Promise.resolve(JSON.parse(jsonStringi));
  return axali;
}

//magaliti
// const original = {
//   name: "Rati",
//   age: 19,
//   skills: ["React"],
//   address: { city: "Tbilisi" },
// };

// kopireba(original).then((copy) => {
//   copy.address.city = "Batumi";
//   copy.age = 22;
//   console.log("Original:", original);
//   console.log("Copy:", copy);
// });
function kopireba(obj) {
  return new Promise((resolve, reject) => {
    if (
      typeof obj !== "object" ||
      obj === null ||
      (Array.isArray(obj) === false && Object(obj) !== obj)
    ) {
      reject("obieqti unda iyos");
      return;
    }

    const jsonStringi = JSON.stringify(obj);
    const axali = JSON.parse(jsonStringi);
    resolve(axali);
  });
}
