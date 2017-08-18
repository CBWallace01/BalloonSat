var end = new Date('08/21/2017 1:30 PM');
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

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

timer = setInterval(showRemaining, 1000);

var config = {
  projectId: 'balloonsat-173803',
  keyFilename: 'BalloonSat-47b9eb0223be.json'
};

var now = new Date();
var nowSec = Math.round(now.getTime() / 1000);
var laterSec = nowSec + 3600;

console.log(window.btoa('{"alg":"RS256","typ":"JWT"}'));
var claims = '{"iss":"balloonsat-173803@appspot.gserviceaccount.com",'+
  '"scope":"https://storage-api.googleapis.com",'+
  '"aud":"https://www.googleapis.com/oauth2/v4/token",'+
  '"exp":'+nowSec+','+
  '"iat":'+laterSec+'}'
console.log(nowSec);
console.log(laterSec);
console.log(window.btoa(claims));