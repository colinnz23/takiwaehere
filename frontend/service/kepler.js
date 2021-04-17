

// get parent
const parent = window.parent;



//receive
window.addEventListener('message', function(e) {
    let view = e.data;

    if(view === "map") {
      viewMap(KeplerGl, store);
    } else if(view === "satellite") {
      viewSatellite(KeplerGl, store);
    } else if(view === "road") {
        console.log(" r - r");
    } else {
        throw new Error("invalid view");
    }
});
