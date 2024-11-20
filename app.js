const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");
btnMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  btnMenu.classList.toggle("active");
});


window.addEventListener("click", (e) => {

  
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

  console.dir();
  
  window.onload = () => {
    for (const item of document.querySelectorAll(".header__menu > li > a")) {
      const href = item.attributes.href.value;
      if (window.location.pathname === `${href}`) {
        document.querySelector(`.header__menu > li > a[href="${href}"]`).classList.add("active");
      }
    }
  }

