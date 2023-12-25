const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 80);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};
const sr = ScrollReveal({
  origin: "top",
  distance: "85px",
  duration: 2500,
  reset: true,
});
sr.reveal(".home-text", { delay: 100 });
sr.reveal(".home-img", { delay: 400 });
sr.reveal(".container", { delay: 400 });
sr.reveal(".about-img", {});
sr.reveal(".about-text", { delay: 300 });
sr.reveal(".middle-text", { delay: 300 });
sr.reveal(".shop-content", { delay: 300 });

// mode
var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    icon.src = "img/moon.png";
  } else {
    icon.src = "img/sun.png";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  var loader = document.getElementById("preloader");

  setTimeout(function () {
      loader.style.display = "none";
      document.getElementById("main-content").style.display = "block";
  }, 33000);
});

$(document).ready(function () {

  $('.size li').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
  });

  $('.colors span').click(function () {

      $(this).addClass('active').siblings().removeClass('active');

      let image = $(this).attr('data-image');
      $('.image img').attr('src', image);

      let color = $(this).css('background');
      $('.content .btn').css('background', color);

  });

});
