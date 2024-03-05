let navBeranda = document.querySelector(".nav-beranda");

// navBeranda.addEventListener("click", function () {
//   alert("Welcome");
// });

let navContact = document.querySelector(".nav-contact");
let navCarList = document.querySelector(".nav-carList");
let navBikeList = document.querySelector(".nav-bikeList");
let rentNow = document.querySelector("#rent")


navContact.addEventListener("click", function () {
  location.href = "#contact";
});

navCarList.addEventListener("click", function(){
    location.href = "#carList";
})

navBikeList.addEventListener("click", function(){
    location.href = "#bikeList";
})

rentNow.addEventListener("click", function(){
    alert("Under Dev");
})