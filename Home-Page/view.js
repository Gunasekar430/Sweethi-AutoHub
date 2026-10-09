const params = new URLSearchParams(window.location.search);

const carId = Number(params.get("id"));

const selectedCar = cars.find(function(car) {
    return car.id === carId;
});

if (selectedCar) {

    document.getElementById("viewRegYear").textContent =
        "Reg Year : " + selectedCar.regYear;

    document.getElementById("viewCarName").textContent =
        selectedCar.name;

    document.getElementById("viewCarPrice").textContent =
        selectedCar.price;

    document.getElementById("viewCarImage").src =
        selectedCar.image;

    document.getElementById("viewCarImage").alt =
        selectedCar.name;

    document.getElementById("viewCarKm").textContent =
        selectedCar.km;

    document.getElementById("viewCarFuel").textContent =
        selectedCar.fuel;

    document.getElementById("viewCarLocation").textContent =
        selectedCar.location;

} else {

    console.log("Car not found");

}