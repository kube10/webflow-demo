let device;

function getDevice() {
  if ($(window).width > 1920) {
    device = xl
  } else if ($(window).width > 992){
    device = l
  } else if ($(window).width > 768){
    device = m
  } else if ($(window).width > 567){
    device = s
  } else {
    device = xs
  }

  return device
}

export default getDevice
