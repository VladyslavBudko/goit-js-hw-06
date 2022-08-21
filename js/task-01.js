const listWithLiItemAll = document.querySelectorAll(".item");
console.log(`Number of categories: `, listWithLiItemAll.length);

// console.log(listWithLiItemAll);

for (const item of listWithLiItemAll) {
  const listWithH2 = item.querySelector("h2");
  const listWithLi = item.querySelectorAll("li");
  console.log(`Category: `, listWithH2.textContent);
  console.log(`Elements: `, listWithLi.length);
}
