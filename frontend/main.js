const setIFrame = document.querySelector(".mapDisplay");

// current map view status
let mapViewStatus = "map";

function selectSatellite() {
   // setIFrame.setAttribute('src',"./map_display/kepler.gl2.html");
   mapViewStatus = "satellite";
   
}
function selectMap() {
   // setIFrame.setAttribute('src',"./map_display/kepler.gl3.html");
   mapViewStatus = "map";
}
function selectRoad() {
   // setIFrame.setAttribute('src',"./map_display/kepler.gl1.html");
   mapViewStatus = "road";
}


const setSatBtn = document.querySelector("#satelliteSelection");
const setRoadBtn = document.querySelector("#roadSelection");
const setMapBtn = document.querySelector("#mapSelection");

setSatBtn.addEventListener('click', () => {
    selectSatellite();
});

setRoadBtn.addEventListener('click', () => {
   selectRoad();
});

setMapBtn.addEventListener('click', () => {
   selectMap();
});
