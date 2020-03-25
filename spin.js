/* global AFRAME */
AFRAME.registerComponent('spin', {

  init: function () {
    console.log('init-spin');
  },
  
  tick: function(time, timeDelta) {
    let rotation = this.el.getAttribute('rotation');
    rotation.x = rotation.x + 2;
    this.el.setAttribute('rotation', rotation);
  }

    
});