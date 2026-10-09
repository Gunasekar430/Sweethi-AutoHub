

var loginCard = document.getElementById("loginCard");
var loginButton = document.querySelector(".log-btn");

var signCard = document.getElementById("signCard");
var signupButton = document.querySelector(".signup-btn");

var LoginSign = document.getElementById("loginSign");
var navbarProfile = document.querySelector(".navbar-pro");




navbarProfile.style.display = "none";


loginButton.addEventListener("click", function (event) {

    event.stopPropagation();

    loginCard.style.display = "block";

    signCard.style.display = "none";

});

signupButton.addEventListener("click", function (event) {

    event.stopPropagation();

    signCard.style.display = "block";

    loginCard.style.display = "none";

});

loginCard.addEventListener("click", function (event) {

    event.stopPropagation();

});


signCard.addEventListener("click", function (event) {

    event.stopPropagation();

});


// ---------- LOGIN ----------

function login(event) {

    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "" || password === "") {

        alert("Please Fill All Fields");

        return;

    }

    alert("Login Successfully");

    loginCard.style.display = "none";
    LoginSign.style.display = "none";
    navbarProfile.style.display = "flex";
    localStorage.setItem("isLogin","true");
    window.location.href="main.html";

    // window.location.href="main.html";

}


// ---------- SIGNUP ----------

function checkSign(event) {

    event.preventDefault();

    var name = document.getElementById("signName").value;
    var email = document.getElementById("signEmail").value;
    var password = document.getElementById("signPassword").value;
    var check = document.getElementById("check");

    if ( name === "" || email === "" || password === "" ||!check.checked ) {

        alert("Please Fill All Fields");

    }

    alert("Account Created Successfully");


    // Store Data

    localStorage.setItem("UserName", name);
    localStorage.setItem("UserEmail", email);
    localStorage.setItem("UserPassword", password);
    localStorage.setItem("isLogin","true");
    signCard.style.display = "none";
    LoginSign.style.display = "none";
    navbarProfile.style.display = "flex";

    // window.location.href="main.html";

}


var profileIcon = document.getElementById("profileIcon");
var profileMenu = document.getElementById("profileMenu");

profileIcon.addEventListener("click", function (event) {

    event.stopPropagation();

    if (profileMenu.style.display === "block") {

        profileMenu.style.display = "none";
    }

    else {

        profileMenu.style.display = "block";
    }

});


profileMenu.addEventListener("click", function (event) {

    event.stopPropagation();
});



// ============== OUTSIDE CLICK CLOSE ==============

document.addEventListener("click", function () {

    loginCard.style.display = "none";
    signCard.style.display = "none";
    profileMenu.style.display = "none";

});



const container = document.querySelector(".product-container");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");


if (next) {

    next.addEventListener("click", function () {

        container.scrollLeft += 1000;
    });
}

if (prev) {

    prev.addEventListener("click", function () {

        container.scrollLeft -= 1000;
    });

}

window.onload = function(){

    if(localStorage.getItem("isLogin") === "true"){

        document.getElementById("loginSign").style.display="none";
        document.querySelector(".navbar-pro").style.display="flex";

    }

    else{

        document.getElementById("loginSign").style.display="flex";
        document.querySelector(".navbar-pro").style.display="none";

    }

}

function logout(){

    localStorage.removeItem("isLogin");
    window.location.href="index.html";

}



const rentCars = [

{
    id:1,
    name:"BMW X5 xDrive30d",
    image:"img/Bye-img/img1.webp",
    km:"6800 Km",
    fuel:"Petrol",
    registration:"Chennai",
    price:"₹4500 / Day"
},

{
    id:2,
    name:"Audi Q7 Premium Plus",
    image:"img/Bye-img/img13.webp",
    km:"6800 Km",
    fuel:"Petrol",
    registration:"Chennai",
    price:"₹5500 / Day"
},

{
    id:3,
    name:"Kia Seltos GTX+",
    image:"img/Bye-img/img49.jpg",
    km:"6800 Km",
    fuel:"Petrol",
    registration:"Chennai",
    price:"₹4000 / Day"
},

{
    id:4,
    name:"MG Hector Sharp Pro",
    image:"img/Bye-img/img73.jpg",
    km:"6800 Km",
    fuel:"Petrol",
    registration:"Chennai",
    price:"₹4500 / Day"
},

{
    id:5,
    name:"Honda City ZX",
    image:"img/Bye-img/img70.webp",
    km:"6800 Km",
    fuel:"Petrol",
    registration:"Chennai",
    price:"₹5000 / Day"
},

{
    id:6,
    name:"Tata Nexon Fearless",
    image:"img/Bye-img/img22.jpg",
    km:"6800 Km",
    fuel:"Petrol",
    registration:"Chennai",
    price:"₹3000 / Day"
},

{
    id:7,
    name:"Hyundai Verna SX",
    image:"img/Bye-img/img51.webp",
    km:"6800 Km",
    fuel:"Petrol",
    registration:"Chennai",
    price:"₹4500 / Day"
},

{
    id:8,
    name:"Toyota Innova Crysta ZX",
    image:"img/Bye-img/img22.jpg",
    km:"6800 Km",
    fuel:"Petrol",
    registration:"Chennai",
    price:"₹5500 / Day"
},

{
    id:9,
    name:"BMW 320d M Sport",
    image:"img/Bye-img/img6.webp",
    km:"6800 Km",
    fuel:"Petrol",
    registration:"Chennai",
    price:"₹5500 / Day"
},

{
    id:10,
    name:"Audi A6 Technology",
    image:"img/Bye-img/img16.webp",
    km:"6800 Km",
    fuel:"Petrol",
    registration:"Chennai",
    price:"₹4500 / Day"
}

];

var RentImg = document.getElementById("rentImg")
var RentName = document.getElementById("rentName")
var RentPrice = document.getElementById("rentPrice")
var RentKm = document.getElementById("rentKm")
var RentType = document.getElementById("rentType")
var RentLocation = document.getElementById("rentLocation")

function show(index){
    RentImg.src = rentCars[index].image
    RentName.textContent = rentCars[index].name
    RentPrice.textContent = rentCars[index].price
    RentKm.textContent = rentCars[index].km
    RentType.textContent = rentCars[index].fuel
    RentLocation.textContent = rentCars[index].registration

}

var bookingButtons = document.querySelectorAll(".Booking");
var RentBookingPage = document.getElementById("rent-view-booking")

bookingButtons.forEach(function(button, index) {

    

    button.addEventListener("click", function() {

        RentBookingPage.style.display = "block"
        show(index);

    });

});

var Icon = document.getElementById("icon");

Icon.addEventListener("click", function(){
    RentBookingPage.style.display = "none"
})

