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
var item = document.querySelector(".scroll-container.gallery");
var leftBtn = document.querySelector(".button-left.gallery");
var rightBtn = document.querySelector(".button-right.gallery");
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
  item = document.querySelector(".scroll-container.gallery");
  item.scrollTo(item.scrollLeft + item.offsetWidth, 0);
}

// Gallery scroll left
function onScrollLeft() {
  item = document.querySelector(".scroll-container.gallery");
  item.scrollTo(item.scrollLeft - 950, 0);
}

/* Purulia Gallery Scroll */
var itemPuru = document.querySelector(".scroll-container.purulia");
var leftBtnPuru = document.querySelector(".button-left.purulia");
var rightBtnPuru = document.querySelector(".button-right.purulia");
itemPuru.onscroll = function () {
  if (itemPuru.scrollLeft > 0) {
    leftBtnPuru.style.opacity = "1";
  } else {
    leftBtnPuru.style.opacity = "0";
  }
  if (
    Math.round(itemPuru.offsetWidth + itemPuru.scrollLeft) >=
    itemPuru.scrollWidth
  ) {
    rightBtnPuru.style.opacity = "0";
  } else {
    rightBtnPuru.style.opacity = "1";
  }
};

// Purulia Gallery scroll right
function onScrollRightPurulia() {
  itemPuru = document.querySelector(".scroll-container.purulia");
  itemPuru.scrollTo(itemPuru.scrollLeft + itemPuru.offsetWidth, 0);
}

// Purulia Gallery scroll left
function onScrollLeftPurulia() {
  itemPuru = document.querySelector(".scroll-container.purulia");
  itemPuru.scrollTo(itemPuru.scrollLeft - 950, 0);
}

var currentImg = 0;
var totalImages = 6;
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

var totalPuruliaImages = 16;
var currentPuruliaImg = 0;
// Purulia Modal Prev button click
function prevImgPurulia() {
  let imgInd =
    currentPuruliaImg > 1 ? currentPuruliaImg - 1 : totalPuruliaImages;
  currentPuruliaImg = imgInd;
  let imgSrc = `./assets/images/purulia/${imgInd}.jpeg`;
  $("#modalImgPurulia").attr("src", imgSrc);
  /* $(".modalBgPuru").css({
    "background-image": `url(${imgSrc})`,
    "width": "100%",
    "height": "80vh",
    "background-size": "contain",
    "background-repeat": "no-repeat",
    "background-position": "center center"
  }); */
}

// Purulia Modal Next button click
function nextImgPurulia() {
  let imgInd =
    currentPuruliaImg < totalPuruliaImages - 1 ? currentPuruliaImg + 1 : 1;
  currentPuruliaImg = imgInd;
  let imgSrc = `./assets/images/purulia/${imgInd}.jpeg`;
  $("#modalImgPurulia").attr("src", imgSrc);
  /* $(".modalBgPuru").css({
    "background-image": `url(${imgSrc})`,
  }); */
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
  document.querySelector(".scroll-container.gallery").appendChild(div);
}

// Load Purulia image list in page
for (let i = 1; i <= totalPuruliaImages; i++) {
  let div = document.createElement("DIV");
  div.setAttribute("class", "");
  let x = document.createElement("IMG");
  x.setAttribute("src", `./assets/images/purulia/${i}.jpeg`);
  x.setAttribute("class", "gallery-item");
  x.setAttribute("alt", `Image ${i}`);
  x.setAttribute("id", `Puru ${i}`);
  div.appendChild(x);
  document.querySelector(".scroll-container.purulia").appendChild(div);
}

// Open modal on image click
document
  .querySelector(".scroll-container.gallery")
  .addEventListener("click", (e) => {
    $("#modalImg").attr("src", e.target.getAttribute("src"));
    currentImg = Number(e.target.getAttribute("id"));
    if (currentImg > 14) {
      document.querySelector("#imageName").innerHTML =
        "Santalabari, Buxa, West Bengal";
    } else {
      document.querySelector("#imageName").innerHTML =
        "Panchalingeswar, Odisha";
    }
    $("#myModal").modal({
      keyboard: false,
    });
  });

// Open purulia modal on image click
document
  .querySelector(".scroll-container.purulia")
  .addEventListener("click", (e) => {
    /* $(".modalBgPuru").css({
      "background-image": `url(${e.target.getAttribute("src")})`,
    }); */
    $("#modalImgPurulia").attr("src", e.target.getAttribute("src"));
    $("#puruliaModal").modal({
      keyboard: false,
    });
  });

$(".nav-item").on("click", function (e) {
  if ($("#navbarNav").hasClass("show")) {
    $("#navbarNav").removeClass("show");
  }
});

function openMagazineModal(imgSrc) {
  $("#magazineImg").attr("src", imgSrc);
  $("#magazineModal").modal({
    keyboard: false,
  });
}

var allMagazineImages = [
  "./assets/images/Magazine_2020_Cover.jpg",
  "./assets/images/Magazine_2020_Index_1.png",
  "./assets/images/Magazine_2020_Index_2.png",
  "./assets/images/Magazine_Album_1.jpg",
  "./assets/images/Magazine_Album_2.jpg",
];

function prevMagazineImg() {
  let magImg = $("#magazineImg").attr("src");
  let magImgInd = allMagazineImages.indexOf(magImg);
  let prevMagImg = magImg;
  if (magImgInd > 0) {
    prevMagImg = allMagazineImages[magImgInd - 1];
  } else {
    prevMagImg = allMagazineImages[allMagazineImages.length - 1];
  }
  $("#magazineImg").attr("src", prevMagImg);
}

function nextMagazineImg() {
  let magImg = $("#magazineImg").attr("src");
  let magImgInd = allMagazineImages.indexOf(magImg);
  let nextMagImg = magImg;
  if (magImgInd < allMagazineImages.length - 1) {
    nextMagImg = allMagazineImages[magImgInd + 1];
  } else {
    nextMagImg = allMagazineImages[0];
  }
  $("#magazineImg").attr("src", nextMagImg);
}
