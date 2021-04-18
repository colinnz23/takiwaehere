

// get parent
const parent = window.parent;



//receive when iframe is c hanged
window.addEventListener('message', function(e) {
    let view = e.data;

    if(view === "map") {
      viewMap(KeplerGl, store);
      sendMessageToParent(view);
    } else if(view === "satellite") {
      viewSatellite(KeplerGl, store);
      sendMessageToParent(view);
    } else if(view === "road") {
      // view road
      sendMessageToParent(view);
    } else {
        throw new Error("invalid view");
    }
});

// send message to iframe when view is changed
function sendMessageToParent(view) {
  parent.postMessage(view, "*");
  console.log("view changed");
}
