var i = 0;
var txt = 'brenden';
var speed = 90;

function type() {
  if (i < txt.length) {
    document.getElementById("typed").innerHTML += txt.charAt(i);
    setTimeout(type, speed);
    i++;
  }
}
