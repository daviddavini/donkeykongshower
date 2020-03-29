let synth, soundLoop;
let notePattern = [
62, 62, 74, 74, 69, 69, 69, 68,
68, 67, 67, 65, 65, 62, 65, 67,
60, 60, 74, 74, 69, 69, 69, 68,
68, 67, 67, 65, 65, 62, 65, 67,
59, 59, 74, 74, 69, 69, 69, 68,
68, 67, 67, 65, 65, 62, 65, 67,
58, 58, 74, 74, 69, 69, 69, 68,
68, 67, 67, 65, 65, 62, 65, 67];

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(canvasPressed);
  colorMode(HSB);
  background(0, 0, 86);
  textAlign(CENTER, CENTER);
  textSize(40);
  text('tap to start/stop', windowWidth/2, windowHeight/2);

  //the looper's callback is passed the timeFromNow
  //this value should be used as a reference point from
  //which to schedule sounds
  let intervalInSeconds = 0.125;
  soundLoop = new p5.SoundLoop(onSoundLoop, intervalInSeconds);

  synth = new p5.MonoSynth();
}

function canvasPressed() {
  // ensure audio is enabled
  userStartAudio();

  if (soundLoop.isPlaying) {
    soundLoop.stop();
  } else {
    // start the loop
    soundLoop.start();
  }
}

function onSoundLoop(timeFromNow) {
  let noteIndex = (soundLoop.iterations - 1) % notePattern.length;
  let note = midiToFreq(notePattern[noteIndex]);
  synth.play(note, 0.5, timeFromNow);
  background(noteIndex * 360 / notePattern.length, 50, 100);
}

var socket = io();

socket.on('log', function(msg){
  console.log("Server Log: " + msg);
  // Print log on screen
})

textsize(15);
text("Score: "+ player1score, 20, 30);
text("Score: "+ player2score, 20, 45);
text("Score: "+ player3score, 20, 60);
text("Score: "+ player4score, 20, 75);

console.log('hello world!');
