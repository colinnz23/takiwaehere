// When iframe is initially loaded, show map view
window.addEventListener("load", () => {
  viewMap(KeplerGl, store);
});

// Map view
function viewMap(keplerGl, store) {
  const datasets = firstData;
  const config = {"version":"v1","config":{"visState":{"filters":[],"layers":[{"id":"24cibb","type":"point","config":{"dataId":"4b43ff2mg","label":"Point","color":[255,203,153],"columns":{"lat":"Latitude","lng":"Longitude","altitude":null},"isVisible":true,"visConfig":{"radius":10,"fixedRadius":false,"opacity":0.8,"outline":false,"thickness":2,"strokeColor":null,"colorRange":{"name":"Global Warming","type":"sequential","category":"Uber","colors":["#5A1846","#900C3F","#C70039","#E3611C","#F1920E","#FFC300"]},"strokeColorRange":{"name":"Global Warming","type":"sequential","category":"Uber","colors":["#5A1846","#900C3F","#C70039","#E3611C","#F1920E","#FFC300"]},"radiusRange":[0,50],"filled":true},"hidden":false,"textLabel":[{"field":null,"color":[255,255,255],"size":18,"offset":[0,0],"anchor":"start","alignment":"center"}]},"visualChannels":{"colorField":{"name":"Depth","type":"real"},"colorScale":"quantile","strokeColorField":null,"strokeColorScale":"quantile","sizeField":null,"sizeScale":"linear"}}],"interactionConfig":{"tooltip":{"fieldsToShow":{"4b43ff2mg":[{"name":"Latitude","format":null},{"name":"Longitude","format":null},{"name":"Depth","format":null}]},"compareMode":false,"compareType":"absolute","enabled":true},"brush":{"size":0.5,"enabled":false},"geocoder":{"enabled":false},"coordinate":{"enabled":false}},"layerBlending":"normal","splitMaps":[],"animationConfig":{"currentTime":null,"speed":1}},"mapState":{"bearing":0,"dragRotate":false,"latitude":36.885853609614074,"longitude":-121.14459977932077,"pitch":0,"zoom":8.124848672933691,"isSplit":false},"mapStyle":{"styleType":"dark","topLayerGroups":{},"visibleLayerGroups":{"label":true,"road":true,"border":false,"building":true,"water":true,"land":true,"3d building":false},"threeDBuildingColor":[9.665468314072013,17.18305478057247,31.1442867897876],"mapStyles":{}}}};

  const loadedData = keplerGl.KeplerGlSchema.load(
  datasets,
  config
  );

  store.dispatch(keplerGl.addDataToMap({
  datasets: loadedData.datasets,
  config: loadedData.config,
  options: {
      centerMap: false
  }
  }));
};


// Satellite view
function viewSatellite(keplerGl, store) {
  const datasets = firstData;
  const config = {"version":"v1","config":{"visState":{"filters":[],"layers":[{"id":"24cibb","type":"point","config":{"dataId":"4b43ff2mg","label":"Point","color":[255,203,153],"columns":{"lat":"Latitude","lng":"Longitude","altitude":null},"isVisible":true,"visConfig":{"radius":10,"fixedRadius":false,"opacity":0.8,"outline":false,"thickness":2,"strokeColor":null,"colorRange":{"name":"Global Warming","type":"sequential","category":"Uber","colors":["#5A1846","#900C3F","#C70039","#E3611C","#F1920E","#FFC300"]},"strokeColorRange":{"name":"Global Warming","type":"sequential","category":"Uber","colors":["#5A1846","#900C3F","#C70039","#E3611C","#F1920E","#FFC300"]},"radiusRange":[0,50],"filled":true},"hidden":false,"textLabel":[{"field":null,"color":[255,255,255],"size":18,"offset":[0,0],"anchor":"start","alignment":"center"}]},"visualChannels":{"colorField":{"name":"Depth","type":"real"},"colorScale":"quantile","strokeColorField":null,"strokeColorScale":"quantile","sizeField":null,"sizeScale":"linear"}}],"interactionConfig":{"tooltip":{"fieldsToShow":{"4b43ff2mg":[{"name":"Latitude","format":null},{"name":"Longitude","format":null},{"name":"Depth","format":null}]},"compareMode":false,"compareType":"absolute","enabled":true},"brush":{"size":0.5,"enabled":false},"geocoder":{"enabled":false},"coordinate":{"enabled":false}},"layerBlending":"normal","splitMaps":[],"animationConfig":{"currentTime":null,"speed":1}},"mapState":{"bearing":0,"dragRotate":false,"latitude":36.94835936336185,"longitude":-122.0674234789396,"pitch":0,"zoom":7.097302134517725,"isSplit":false},"mapStyle":{"styleType":"satellite","topLayerGroups":{},"visibleLayerGroups":{},"threeDBuildingColor":[3.7245996603793508,6.518049405663864,13.036098811327728],"mapStyles":{}}}};

  const loadedData = keplerGl.KeplerGlSchema.load(
  datasets,
  config
  );

  store.dispatch(keplerGl.addDataToMap({
  datasets: loadedData.datasets,
  config: loadedData.config,
  options: {
      centerMap: false
  }
  }));
};

