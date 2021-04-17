console.log(123);

function selectSatellite() {
    alert("satellite selected");
 }
 function selectMap() {
    alert("map selected");
 }
 function selectRoad() {
    alert("road selected");
 }


const setSatBtn = document.querySelector("#satelliteSelection");

setSatBtn.addEventListener('click', () => {
    selectSatellite();
})