function layerList(styleJson) {
    var menulist = document.getElementById('menu');
    menulist.style.visibility='visible';
    var layerList = document.getElementById('layer-toggles');
    while (layerList.firstChild) {
      layerList.removeChild(layerList.firstChild);
    }
    if (styleJson.layers.length < 220) {
    activelayers = styleJson.layers;
    var zoomlevel = map.getZoom();
      for (var i = 0; i < activelayers.length; i++) {        
        console.log(activelayers[i].source);
        if (activelayers[i].source=="kipa") {
          var name = activelayers[i].name;
          var id = activelayers[i].id;
          const toggle = document.createElement('li')
          toggle.style
          // create label
          const label = document.createElement('label')
          label.setAttribute('for', id)
          label.setAttribute('name', id)
          label.innerHTML = name;

          // create input
          const input = document.createElement('input')
          input.setAttribute('id', id)
          input.setAttribute('type', 'checkbox')
          input.setAttribute('name', 'layertoggle')
          input.setAttribute('value', id)
          input.setAttribute('checked', true)

          // add event
          input.onclick = function (e) {
          const checked = this.checked
            if (checked) {
                map.setLayoutProperty(this.id, 'visibility', 'visible');
              } else {
                map.setLayoutProperty(this.id, 'visibility', 'none');
              }
          }
          var layers = document.getElementById('layer-toggles');
          toggle.append(input)
          toggle.append(label)
          layers.append(toggle)
          menulist.style.visibility='visible';
        } else {
          menulist.style.visibility='hidden';
      }
      } 
    } else {
        menulist.style.visibility='hidden';
    }
    
    checkzoom(styleJson);
}


function checknewzoom()
{
  var newZoomLevel = map.getZoom();
  var currentZoomLevel = newZoomLevel;
  var layerList = document.getElementById('layer-toggles');
  var layersOfService = map.getStyle();
  activelayers = layersOfService.layers;
  for (var i = 0; i < activelayers.length; i++) {
      var id = activelayers[i].id;
      var children = layerList.childNodes;
      var len = children.length;
      if(len --) do {
        var childname= children[len].childNodes[0].id;
          if  (id==childname) {
            var labelLayer = document.getElementById(id);
            if (activelayers[i].minzoom>currentZoomLevel) {
            labelLayer.disabled=true;
            } else {
              labelLayer.disabled=false;
            }
          }
      } while(len --);         
  } 
}
function checkzoom(styleJson)
{
  var newZoomLevel = map.getZoom();  
  var currentZoomLevel = newZoomLevel;
  var layerList = document.getElementById('layer-toggles');
  var layersOfService = styleJson;
  activelayers = layersOfService.layers;
  for (var i = 0; i < activelayers.length; i++) {
      var id = activelayers[i].id;
      var children = layerList.childNodes;
      var len = children.length;
      if(len --) do {
        var childname= children[len].childNodes[0].id;
          if  (id==childname) {
            var labelLayer = document.getElementById(id);
            if (activelayers[i].minzoom>currentZoomLevel) {
            labelLayer.disabled=true;
            } else {
              labelLayer.disabled=false;
            }
          }
      } while(len --);
      
  }
      
  
}