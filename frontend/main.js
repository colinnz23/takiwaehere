const setIFrame = document.querySelector(".mapDisplay");

// current map view status
let mapViewStatus = "satellite";
let vehicle = "all";
function selectSatellite() {

    if(vehicle == "all"){
        setIFrame.setAttribute('src',"./htmlMap/allSattel.html");
    }
    if(vehicle == "car"){
        setIFrame.setAttribute('src',"./htmlMap/carSattel.html");
    }
    if(vehicle =="truck"){
        setIFrame.setAttribute('src',"./htmlMap/truckSattel.html");
    }
    if(vehicle=="boat"){
        setIFrame.setAttribute('src',"./htmlMap/boatSattel.html");
    }

   mapViewStatus = "satellite";
   
}
function selectMap() {
   setIFrame.setAttribute('src',"./htmlMap/allMap.html");
   mapViewStatus = "map";
}

function selectRoad() {
    console.log(vehicle);
    if(vehicle == "all"){
        setIFrame.setAttribute('src',"./htmlMap/allRoad.html");
    }
    if(vehicle == "car"){
        setIFrame.setAttribute('src',"./htmlMap/carRoad.html");
    }
    if(vehicle =="truck"){
        setIFrame.setAttribute('src',"./htmlMap/truckRoad.html");
    }
    if(vehicle=="boat"){
        setIFrame.setAttribute('src',"./htmlMap/boatRoad.html");
    }

   mapViewStatus = "road";
   
}
function selectAll(){
    if(mapViewStatus == "map"){
        setIFrame.setAttribute('src',"./htmlMap/allMap.html");
    }
    if(mapViewStatus == "road"){
        setIFrame.setAttribute('src',"./htmlMap/allRoad.html");
    } 
    if(mapViewStatus == "satellite"){
        setIFrame.setAttribute('src',"./htmlMap/allSattel.html");
    }
    vehicle = "all";
}

function selectCar(){
    if(mapViewStatus == "map"){
        setIFrame.setAttribute('src',"./htmlMap/carMap.html");
    }
    if(mapViewStatus == "road"){
        setIFrame.setAttribute('src',"./htmlMap/carRoad.html");
    } 
    if(mapViewStatus == "satellite"){
        setIFrame.setAttribute('src',"./htmlMap/carSattel.html");
    }
    vehicle = "car";
}
function selectTruck(){
    if(mapViewStatus == "map"){
        setIFrame.setAttribute('src',"./htmlMap/truckMap.html");
    }
    if(mapViewStatus == "road"){
        setIFrame.setAttribute('src',"./htmlMap/truckRoad.html");
    } 
    if(mapViewStatus == "satellite"){
        setIFrame.setAttribute('src',"./htmlMap/truckSattel.html");
    }
    vehicle = "truck";
}
function selectBoat(){
    if(mapViewStatus == "map"){
        setIFrame.setAttribute('src',"./htmlMap/boatMap.html");
    }
    if(mapViewStatus == "road"){
        setIFrame.setAttribute('src',"./htmlMap/boatRoad.html");
    } 
    if(mapViewStatus == "satellite"){
        setIFrame.setAttribute('src',"./htmlMap/boatSattel.html");
    }
    vehicle = "boat";
}

const setSatBtn = document.querySelector("#satelliteSelection");
const setRoadBtn = document.querySelector("#roadSelection");
const setMapBtn = document.querySelector("#mapSelection");
const setVehicleAll = document.querySelector("#all");
const setVehicleCar = document.querySelector("#car");
const setVehicleTruck = document.querySelector("#truck");
const setVehicleBoat = document.querySelector("#boat");
setVehicleAll.addEventListener('click', () => {
    selectAll();
})
setVehicleCar.addEventListener('click', () => {
    selectCar();
})
setVehicleTruck.addEventListener('click', () => {
    selectTruck();
})
setVehicleBoat.addEventListener('click', () => {
    selectBoat();
})

setSatBtn.addEventListener('click', () => {
    selectSatellite();
});

setRoadBtn.addEventListener('click', () => {
   selectRoad();
});

setMapBtn.addEventListener('click', () => {
   selectMap();
});