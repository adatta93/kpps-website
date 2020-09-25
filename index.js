/* Navbar scroll */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos >= 100) {
    document.querySelector(".navbar").classList.remove("transparent-bg");
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".navbar").style.top = "0";
    } else {
      document.querySelector(".navbar").style.top = "-60px";
    }
  } else {
    document.querySelector(".navbar").classList.add("transparent-bg");
  }
  prevScrollpos = currentScrollPos;
};

/* Gallery Scroll */
var item = document.querySelector(".scroll-container");
var leftBtn = document.querySelector(".button-left");
var rightBtn = document.querySelector(".button-right");
item.onscroll = function () {
  if (item.scrollLeft > 0) {
    leftBtn.style.opacity = "1";
  } else {
    leftBtn.style.opacity = "0";
  }
  if (Math.round(item.offsetWidth + item.scrollLeft) >= item.scrollWidth) {
    rightBtn.style.opacity = "0";
  } else {
    rightBtn.style.opacity = "1";
  }
};

// Gallery scroll right
function onScrollRight() {
  item = document.querySelector(".scroll-container");
  item.scrollTo(item.scrollLeft + item.offsetWidth, 0);
  console.log("sw", item.scrollWidth);
  console.log("sl", item.scrollLeft);
  console.log("ow", item.offsetWidth);
}

// Gallery scroll left
function onScrollLeft() {
  item = document.querySelector(".scroll-container");
  item.scrollTo(item.scrollLeft - 950, 0);
}

/* Deprecated */
var imageList = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
];
var currentImg = 0;

function openModal(imgIndex) {
  currentImg = imgIndex;
  let imgSrc = `./assets/images/${imageList[imgIndex]}`;
  $("#modalImg").attr("src", imgSrc);
  $("#myModal").modal({
    keyboard: false,
  });
}
/* Deprecated */

var totalImages = 66;

// Modal Prev button click
function prevImg() {
  let imgInd = currentImg > 1 ? currentImg - 1 : totalImages;
  currentImg = imgInd;
  let imgSrc = `./assets/images/${imgInd}.jpg`;
  $("#modalImg").attr("src", imgSrc);
  if (currentImg > 14) {
    document.querySelector("#imageName").innerHTML =
      "Santalabari, Buxa, West Bengal";
  } else {
    document.querySelector("#imageName").innerHTML = "Panchalingeswar, Odisha";
  }
}

// Modal Next button click
function nextImg() {
  let imgInd = currentImg < totalImages - 1 ? currentImg + 1 : 1;
  currentImg = imgInd;
  let imgSrc = `./assets/images/${imgInd}.jpg`;
  $("#modalImg").attr("src", imgSrc);
  if (currentImg > 14) {
    document.querySelector("#imageName").innerHTML =
      "Santalabari, Buxa, West Bengal";
  } else {
    document.querySelector("#imageName").innerHTML = "Panchalingeswar, Odisha";
  }
}

// Load image list in page
for (let i = 1; i <= totalImages; i++) {
  let div = document.createElement("DIV");
  div.setAttribute("class", "");
  let x = document.createElement("IMG");
  x.setAttribute("src", `./assets/images/${i}.jpg`);
  x.setAttribute("class", "gallery-item");
  x.setAttribute("alt", `Image ${i}`);
  x.setAttribute("id", `${i}`);
  div.appendChild(x);
  document.querySelector(".scroll-container").appendChild(div);
}

// Open modal on image click
document.querySelector(".scroll-container").addEventListener("click", (e) => {
  $("#modalImg").attr("src", e.target.getAttribute("src"));
  currentImg = Number(e.target.getAttribute("id"));
  if (currentImg > 14) {
    document.querySelector("#imageName").innerHTML =
      "Santalabari, Buxa, West Bengal";
  } else {
    document.querySelector("#imageName").innerHTML = "Panchalingeswar, Odisha";
  }
  $("#myModal").modal({
    keyboard: false,
  });
});

$(".nav-item").on("click", function (e) {
  if ($("#navbarNav").hasClass("show")) {
    $("#navbarNav").removeClass("show");
  }
});
