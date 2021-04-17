//get iframe
const child = document.getElementById('iframe').contentWindow;

const setSatBtn = document.querySelector("#satelliteSelection");
const setRoadBtn = document.querySelector("#roadSelection");
const setMapBtn = document.querySelector("#mapSelection");

setSatBtn.addEventListener('click', () => {
    // selectSatellite();
    sendMessageToIframe("satellite");
});

setRoadBtn.addEventListener('click', () => {
//    selectRoad();
    sendMessageToIframe("road");
});

setMapBtn.addEventListener('click', () => {
//    selectMap();
    sendMessageToIframe("map");
});


function sendMessageToIframe(view) {
    child.postMessage(view, "*");
    console.log("sent");
}