var myCanvas = document.createElement('canvas');
document.getElementById('confetti').appendChild(myCanvas);

var myConfetti = confetti.create(myCanvas, {
  resize: true,
  useWorker: true
});
myConfetti({
  particleCount: 100,
  spread: 100
  // any other options from the global
  // confetti function
});