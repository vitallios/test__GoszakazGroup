const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");
btnMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  btnMenu.classList.toggle("active");
});


window.addEventListener("click", (e) => {

  console.dir(e.target.id)

 const postElement = e.target
  if (postElement.localName === "button" 
    && postElement.offsetParent.id === "post-0"
  || postElement.id === "post-0") {
      location.href = "/category__pages/";
  }
  if (postElement.localName === "a" && postElement.offsetParent.id === "post-0") {
      location.href = "/post_pages/";
  }
});
