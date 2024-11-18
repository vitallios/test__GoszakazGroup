const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");
btnMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  btnMenu.classList.toggle("active");
});

// const attrCategory = document.querySelectorAll('[data-category]');

// attrCategory.forEach(item => {
//  item.addEventListener('click', (event) => {
//   // поск по номеру категории
//   const categoryNamber = event.target.dataset.category;
//   if (categoryNamber === 'Category_1') {
//     location.href = '/category__pages/';
//   } else {
//     location.href = '404.html';
//   }

//  });
// });
// // поск по id поста
// const idPost = document.querySelectorAll('.post__item');
// idPost.forEach(item => {
//  item.addEventListener('click', (event) => {
//   const idPost = event.target.offsetParent.id;
//   console.dir(idPost);

//   if (idPost === 'post-0') {
//     location.href = '/post_pages/';
//   } else {
//     location.href = '404.html';
//   }

//  })
// });

window.addEventListener("click", (e) => {
 const postElement = e.target
  if (postElement.localName === "button" && postElement.offsetParent.id === "post-0") {
      location.href = "/category__pages/";
  }
  if (postElement.localName === "a" && postElement.offsetParent.id === "post-0") {
      location.href = "/post_pages/";
  }
});
