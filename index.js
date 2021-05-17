import getDevice from 'utils/device.js'

$(document).ready(function(){
  $('.dom-element').css('background-color', 'red');
  console.log(getDevice.getDevice())
})
