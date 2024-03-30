let musicFile1;
let musicFile2;

function preload() {
  musicFile1 = loadSound('music.mp3');
  musicFile2 = loadSound('music2.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  let capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.hide();
}

function draw() {
  image(capture, 0, 0, windowWidth, windowHeight);
}


