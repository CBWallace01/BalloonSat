var end = new Date('08/21/2017 1:30 PM');
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;
var refresh;
var slideshow;
var images = [];
var imagefolder = 'sourceimages';
var imagetype = 'png';
var nextImageLoc = 0;
var imageBaseURL = 'https://storage.cloud.google.com/balloonsat-173803.appspot.com/';

var getUrl = window.location;
var baseURL = getUrl .protocol + "//" + getUrl.host

function showRemaining() {
  var now = new Date();
  var distance = end - now;
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById('countdown').innerHTML = 'ECLIPSE!';
    return;
  }
  var days = Math.floor(distance / _day);
  var hours = Math.floor((distance % _day) / _hour);
  var minutes = Math.floor((distance % _hour) / _minute);
  var seconds = Math.floor((distance % _minute) / _second);

  document.getElementById('countdown').innerHTML = days + 'days ';
  document.getElementById('countdown').innerHTML += hours + 'hrs ';
  document.getElementById('countdown').innerHTML += minutes + 'mins ';
  document.getElementById('countdown').innerHTML += seconds + 'secs';
}

function refreshImageList() {
    $.get(baseURL+"/reload", function(data, status){
        images = $.grep(data, function(el, idx) {return (el.name.indexOf(imagefolder) < 0 || el.name.indexOf(imagetype) < 0)}, true)
    });
}

function nextImage() {
    if(images.length > 0){
        if(nextImageLoc==images.length){
            nextImageLoc = 0;
        }
        var nextURL = imageBaseURL + images[nextImageLoc++].name;
        $("#activeImage").attr("src",nextURL);
    }
}

timer = setInterval(showRemaining, 1000);
refresh = setInterval(refreshImageList, 5000);
refresh = setInterval(nextImage, 1000);
