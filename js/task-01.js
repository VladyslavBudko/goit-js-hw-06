const listWithLiItemAll = document.querySelectorAll(".item");
console.log(`Number of categories: `, listWithLiItemAll.length);

// console.log(listWithLiItemAll);

listWithLiItemAll.forEach((item) => {
  // debugger;
  console.log(`Category: `, item.firstElementChild.textContent);
  console.log(`Elements: `, item.lastElementChild.children.length);
});


// console.log(`!!!!!!!!!!!!`);

// listWithLiItemAll.forEach((item) => {
//   const listWithH2 = item.querySelector("h2");
//   const listWithLi = item.querySelectorAll("li");
//   console.log(`Category: `, listWithH2.textContent);
//   console.log(`Elements: `, listWithLi.length);
// });

// console.log(`!!!!!!!!!!!!`);

// for (const item of listWithLiItemAll) {
//   const listWithH2 = item.querySelector("h2");
//   const listWithLi = item.querySelectorAll("li");
//   console.log(`Category: `, listWithH2.textContent);
//     console.log(listWithH2);
//   console.log(`Elements: `, listWithLi.length);
//     console.log(listWithLi);
// };
