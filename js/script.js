
var name = prompt('Benvenuto su Spotify!\nCome ti chiami?');
var user = document.getElementById('user');
var created = document.getElementById('created');

user.innerText = name;
created.append(name);

var audio = document.getElementById("audio");

function playAudio() {
  if (audio.paused) {
    audio.play()
  } else {
    audio.pause()
  }
}
