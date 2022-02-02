let songName = ["gangsters Paradise", "shotta flow6", "We getting money"];
let songImg = [
  "https://th.bing.com/th/id/R.1b26fe19d1986a642358cd337abb2644?rik=meEEob4vOB%2bsMA&riu=http%3a%2f%2ftv90s.com%2fwp-content%2fuploads%2f2018%2f02%2fcoolio-gangstas-paradise-official-music-video.jpg&ehk=vNpofktOqzuwRcXYE7LTR44yXSBpNKgIr99Rf6nU49M%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
  "https://i.ytimg.com/vi/nmJ2_qq0Mu8/maxresdefault.jpg",
  "https://images.genius.com/f3e3ce6fd008b61719a74b1db5087c36.1000x1000x1.jpg",
];
let songURL = [
  "https://www.youtube.com/watch?v=fPO76Jlnz6c",
  "https://www.youtube.com/watch?v=f9zkBcZZ-1Y",
  "https://www.youtube.com/watch?v=2tA4HSgTY8o",
];
let songArt = ["coolio", "NLE Chopper", "Sheff G"];
let songL=['4:17','3:10','3:01'];
function displaySongInfo() {
  for (let i = 0; i <= songName.length; i++) {
  $(".songs").append(songName[i]);
  $(".images").append($('<img src=songImg[i] >')
);
  $(".artists").append('songArt[i]');
  $(".links").append('<a src=songURL[i]>Link</a>');
  $(".lengths").append(songL[i]);

}
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
}

$("#add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
