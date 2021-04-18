//ifame
const child = document.getElementById('iframe').contentWindow;

//view elements
const setSatBtn = document.querySelector("#satelliteSelection");
const setRoadBtn = document.querySelector("#roadSelection");
const setMapBtn = document.querySelector("#mapSelection");



//add event handlers for views
setSatBtn.addEventListener('click', () => {
    sendViewMessageToIframe("satellite");
});

setRoadBtn.addEventListener('click', () => {
    sendViewMessageToIframe("road");
});

setMapBtn.addEventListener('click', () => {
    sendViewMessageToIframe("map");
});


// send view message to iframe when view is changed
function sendViewMessageToIframe(view) {
    child.postMessage(view, "*");
}

let currentView = "map";

// make button stays darker when view button is clicked (receive message)
window.addEventListener('message', function(e) {
    currentView = e.data;
    if(currentView === "map") {
        setMapBtn.style.backgroundColor = "#e3e8ef";
        setRoadBtn.style.backgroundColor = "transparent";
        setSatBtn.style.backgroundColor = "transparent";
      } else if(currentView === "satellite") {
        setMapBtn.style.backgroundColor = "transparent";
        setRoadBtn.style.backgroundColor = "transparent";
        setSatBtn.style.backgroundColor = "#e3e8ef";
      } else if(currentView === "road") {
        setMapBtn.style.backgroundColor = "transparent";
        setRoadBtn.style.backgroundColor = "#e3e8ef";
        setSatBtn.style.backgroundColor = "transparent";
      } else {
          throw new Error("invalid view");
      }
});



/**
 * 
 */

// //vehicle elements
// const allBtn = document.querySelector("#all");
// const carBtn = document.querySelector("#car");
// const truckBtn = document.querySelector("#truck");
// const boatBtn = document.querySelector("#boat");

// // add event handlers for vehicles
// allBtn.addEventListener('click', () => {
//     sendVehicleMessageToIframe("all");
// })

// carBtn.addEventListener('click', () => {
//     sendVehicleMessageToIframe("car");
// })

// truckBtn.addEventListener('click', () => {
//     sendVehicleMessageToIframe("truck");
// })

// boatBtn.addEventListener('click', () => {
//     sendVehicleMessageToIframe("boat");
// })

// const channel = new MessageChannel();
// const port1 = channel.port1;

// // send vehicle message to iframe when vehicle is changed
// function sendVehicleMessageToIframe(view) {
//     child.postMessage(view, "*");
// }


// send message to iframe when vehicle is changed


/**
 * 
 */


//receive message from iframe when view is successfully changed


// make button stays darker when vehicle button is clicked (receive message)
// window.addEventListener('message', function(e) {
//     currentVehicle = e.data;
//     if(currentView === "all") {
//         allBtn.style.backgroundColor = "#e3e8ef";
//         carBtn.style.backgroundColor = "transparent";
//         truckBtn.style.backgroundColor = "transparent";
//         boatBtn.style.backgroundColor = "transparent";
//       } else if(currentView === "car") {
//         allBtn.style.backgroundColor = "transparent";
//         carBtn.style.backgroundColor = "#e3e8ef";
//         truckBtn.style.backgroundColor = "transparent";
//         boatBtn.style.backgroundColor = "transparent";
//       } else if(currentView === "truck") {
//         allBtn.style.backgroundColor = "transparent";
//         carBtn.style.backgroundColor = "transparent";
//         truckBtn.style.backgroundColor = "#e3e8ef";
//         boatBtn.style.backgroundColor = "transparent";
//       } else if (currentView === "boat") {
//         llBtn.style.backgroundColor = "transparent";
//         carBtn.style.backgroundColor = "transparent";
//         truckBtn.style.backgroundColor = "transparent";
//         boatBtn.style.backgroundColor = "#e3e8ef";
//       } 
//       else {
//           throw new Error("invalid view");
//       }
// });

