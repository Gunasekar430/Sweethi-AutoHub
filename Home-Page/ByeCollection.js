// const searchInput = document.getElementById("carSearch");
//         const suggestionBox = document.getElementById("searchSuggestions");
//         const carCards = document.querySelectorAll(".img-box");

//         function getCarName(card) {
//             const heading = card.querySelector("h2");

//             if (!heading) {
//                 return "";
//             }

//             return heading.textContent.trim();
//         }

//         searchInput.addEventListener("input", function () {

//             const searchValue = this.value.trim().toLowerCase();

//             suggestionBox.innerHTML = "";

//             // Empty search -> all cards show
//             if (searchValue === "") {

//                 suggestionBox.style.display = "none";

//                 carCards.forEach(function (card) {
//                     card.style.display = "";
//                 });

//                 return;
//             }

//             const matches = [];

//             carCards.forEach(function (card) {

//                 const carName = getCarName(card);
//                 const lowerName = carName.toLowerCase();

//                 if (lowerName.includes(searchValue)) {

//                     matches.push({
//                         name: carName,
//                         card: card
//                     });

//                     card.style.display = "";

//                 } else {

//                     card.style.display = "none";

//                 }

//             });

//             // No result
//             if (matches.length === 0) {

//                 suggestionBox.innerHTML =
//                     `<div class="no-result">No car found</div>`;

//                 suggestionBox.style.display = "block";

//                 return;
//             }

//             // Show suggestion list
//             matches.forEach(function (item) {

//                 const div = document.createElement("div");

//                 div.className = "suggestion-item";
//                 div.textContent = item.name;

//                 div.addEventListener("click", function () {

//                     searchInput.value = item.name;

//                     suggestionBox.style.display = "none";

//                     carCards.forEach(function (card) {
//                         card.style.display = "none";
//                     });

//                     item.card.style.display = "";

//                     item.card.scrollIntoView({
//                         behavior: "smooth",
//                         block: "center"
//                     });

//                 });

//                 suggestionBox.appendChild(div);

//             });

//             suggestionBox.style.display = "block";

//         });


//         // Outside click -> close suggestion
//         document.addEventListener("click", function (e) {

//             if (
//                 !searchInput.contains(e.target) &&
//                 !suggestionBox.contains(e.target)
//             ) {
//                 suggestionBox.style.display = "none";
//             }

//         });

const cars = [
    {
        id: 1,
        name: "Toyota Fortuner",
        brand: "Toyota",
        image: "img/Collection-img/img1.jpg",
        marketPrice: 42.5,
        fixedPrice: 39.9,
        year: "2018-22",
        fuel: "Diesel",
        km: "15 Km",
        owner: "1st Owner",
        location: "Chennai"
    },
    {
        id: 2,
        name: "Hyundai Creta SX",
        brand: "Hyundai",
        image: "img/Collection-img/img2.webp",
        marketPrice: 18.8,
        fixedPrice: 16.9,
        year: "2015-21",
        fuel: "Petrol",
        km: "10 Km",
        owner: "1st Owner",
        location: "Coimbatore"
    },
    {
        id: 3,
        name: "Tata Nexon XZ+",
        brand: "Tata",
        image: "img/Collection-img/img3.webp",
        marketPrice: 14.2,
        fixedPrice: 12.97,
        year: "2018-22",
        fuel: "Petrol",
        km: "5 Km",
        owner: "1st Owner",
        location: "Madurai"
    },
    {
        id: 4,
        name: "Mahindra Thar LX",
        brand: "Mahindra",
        image: "img/Collection-img/img4.jpg",
        marketPrice: 20.1,
        fixedPrice: 18.5,
        year: "2018-23",
        fuel: "Diesel",
        km: "0 Km",
        owner: "1st Owner",
        location: "Chennai"
    },
    {
        id: 5,
        name: "Kia Seltos GTX",
        brand: "Kia",
        image: "img/Collection-img/img5.jpg",
        marketPrice: 19.9,
        fixedPrice: 17.5,
        year: "2022",
        fuel: "Petrol",
        km: "2 Km",
        owner: "1st Owner",
        location: "Salem"
    },
    {
        id: 6,
        name: "Honda City ZX",
        brand: "Honda",
        image: "img/Collection-img/img6.jpg",
        marketPrice: 19.9,
        fixedPrice: 18.1,
        year: "2022",
        fuel: "Petrol",
        km: "1 Km",
        owner: "1st Owner",
        location: "Trichy"
    }
];

const collectionBox =
    document.getElementById("collectionBox");

const searchInput =
    document.getElementById("carSearch");

const brandFilter =
    document.getElementById("brandFilter");

const priceFilter =
    document.getElementById("priceFilter");

const fuelFilter =
    document.getElementById("fuelFilter");

const searchBtn =
    document.getElementById("searchBtn");

const suggestionBox =
    document.getElementById("searchSuggestions");


function formatPrice(price) {
    return "₹ " + price.toFixed(2) + " Lakh";
}


function displayCars(carList) {

    collectionBox.innerHTML = "";

    if (carList.length === 0) {
        collectionBox.innerHTML = `
            <h2 style="
                width:100%;
                text-align:center;
                padding:50px;
            ">
                No Cars Found
            </h2>
        `;

        return;
    }

    carList.forEach(function (car) {

        const card = document.createElement("div");

        card.className = "img-box";

        card.innerHTML = `
            <img
                src="${car.image}"
                alt="${car.name}"
            >

            <h2>${car.name}</h2>

            <h4>
                Market Price :
                <span style="padding-left:50%;">
                    <strike>
                        ${formatPrice(car.marketPrice)}
                    </strike>
                </span>
            </h4>

            <h4 style="color:#f97316;">
                Car Street Fixed Price :
                <span style="padding-left:30%;">
                    ${formatPrice(car.fixedPrice)}
                </span>
            </h4>

            <div class="box">

                <div class="year">
                    <i class="fa-solid fa-calendar"></i>
                    <p style="padding-left:22px;">
                        ${car.year}
                    </p>
                </div>

                <div class="year">
                    <i class="fa-solid fa-gas-pump"></i>
                    <p style="padding-left:32px;">
                        ${car.fuel}
                    </p>
                </div>

                <div class="year">
                    <i class="fa-solid fa-gauge"></i>
                    <p>${car.km}</p>
                </div>

                <div class="year">
                    <i class="fa-regular fa-circle-user"></i>
                    <p>${car.owner}</p>
                </div>

            </div>

            <div class="location">

                <div class="location-button">
                    <h2>
                        <i
                            class="fa-solid fa-location-dot"
                            style="padding-right:5px;">
                        </i>

                        Reg : ${car.location}
                    </h2>
                </div>

                <div class="view-button">
                    <i
                        class="fa-solid fa-eye"
                        style="color:#f97316;">
                    </i>

                    <button
                        onclick="viewCar(${car.id})">
                        View More
                    </button>
                </div>

            </div>

            <div class="button">

                <button>
                    <i
                        class="fa-regular fa-envelope"
                        style="
                            padding-right:10px;
                            font-size:17px;
                        ">
                    </i>

                    Enquire Now
                </button>

                <button
                    style="
                        margin-left:40.7px;
                        background-color:rgb(29,147,29);
                    ">

                    <i
                        class="fa-brands fa-whatsapp"
                        style="
                            padding-right:10px;
                            font-size:17px;
                        ">
                    </i>

                    WhatsApp Us
                </button>

            </div>

            <div class="order-button">

                <button
                    onclick="buyCar(${car.id})"
                    style="
                        margin-left:30%;
                        padding:10px 60px;
                        font-size:17px;
                        background-color:#f97316;
                        color:white;
                        border:none;
                        border-radius:10px;
                        margin-bottom:40px;
                        cursor:pointer;
                        font-weight:bold;
                    ">

                    Buy Now

                </button>

            </div>
        `;

        collectionBox.appendChild(card);
    });
}


function filterCars() {

    const searchValue =
        searchInput.value.trim().toLowerCase();

    const selectedBrand =
        brandFilter.value;

    const selectedPrice =
        priceFilter.value;

    const selectedFuel =
        fuelFilter.value;


    const filteredCars = cars.filter(function (car) {

        const nameMatch =
            car.name.toLowerCase().includes(searchValue);


        const brandMatch =
            selectedBrand === "all" ||
            car.brand === selectedBrand;


        const fuelMatch =
            selectedFuel === "all" ||
            car.fuel === selectedFuel;


        let priceMatch = true;

        if (selectedPrice !== "all") {

            const priceParts =
                selectedPrice.split("-");

            const minPrice =
                Number(priceParts[0]);

            const maxPrice =
                Number(priceParts[1]);

            priceMatch =
                car.fixedPrice >= minPrice &&
                car.fixedPrice < maxPrice;
        }


        return (
            nameMatch &&
            brandMatch &&
            fuelMatch &&
            priceMatch
        );
    });


    displayCars(filteredCars);
}


function showSuggestions() {

    const searchValue =
        searchInput.value.trim().toLowerCase();

    suggestionBox.innerHTML = "";

    if (searchValue === "") {
        suggestionBox.style.display = "none";
        return;
    }


    const matches = cars.filter(function (car) {

        return car.name
            .toLowerCase()
            .includes(searchValue);
    });


    if (matches.length === 0) {

        suggestionBox.innerHTML = `
            <div class="no-result">
                No car found
            </div>
        `;

        suggestionBox.style.display = "block";

        return;
    }


    matches.forEach(function (car) {

        const item =
            document.createElement("div");

        item.className =
            "suggestion-item";

        item.textContent =
            car.name;


        item.addEventListener(
            "click",
            function () {

                searchInput.value =
                    car.name;

                suggestionBox.style.display =
                    "none";

                filterCars();
            }
        );


        suggestionBox.appendChild(item);
    });


    suggestionBox.style.display =
        "block";
}


function viewCar(id) {

    window.location.href =
        "view.html?id=" + id;
}


function buyCar(id) {

    window.location.href =
        "view.html?id=" + id;
}


searchInput.addEventListener(
    "input",
    function () {

        showSuggestions();

        filterCars();
    }
);


brandFilter.addEventListener(
    "change",
    filterCars
);


priceFilter.addEventListener(
    "change",
    filterCars
);


fuelFilter.addEventListener(
    "change",
    filterCars
);


searchBtn.addEventListener(
    "click",
    filterCars
);


document.addEventListener(
    "click",
    function (event) {

        if (
            !searchInput.contains(event.target) &&
            !suggestionBox.contains(event.target)
        ) {
            suggestionBox.style.display =
                "none";
        }
    }
);


displayCars(cars);