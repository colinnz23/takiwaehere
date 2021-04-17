const setIFrame = document.querySelector(".mapDisplay");
function selectSatellite() {
    setIFrame.setAttribute('src',"./map_display/kepler.gl2.html");
 }
 function selectMap() {
   setIFrame.setAttribute('src',"./map_display/kepler.gl3.html");
 }
 function selectRoad() {
   setIFrame.setAttribute('src',"./map_display/kepler.gl1.html");
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
