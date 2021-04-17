const setIFrame = document.querySelector(".mapDisplay");
function selectSatellite() {
    setIFrame.setAttribute('src',"./map_display/kepler.glSattel.html");
 }
 function selectMap() {
   setIFrame.setAttribute('src',"./map_display/kepler.glMap.html");
 }
 function selectRoad() {
   setIFrame.setAttribute('src',"./map_display/kepler.glRoad.html");
 }


const setSatBtn = document.querySelector("#satelliteSelection");
const setRoadBtn = document.querySelector("#roadSelection");
const setMapBtn = document.querySelector("#mapSelection");

setSatBtn.addEventListener('click', () => {
    selectSatellite();
})

setRoadBtn.addEventListener('click', () => {
   selectRoad();
})
setMapBtn.addEventListener('click', () => {
   selectMap();
})
