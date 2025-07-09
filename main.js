const canvas = document.getElementById("canvas");

function draw() {
  const ctx = canvas.getContext("2d");
  ctx.fillRect(25, 25, 100, 100);
  ctx.fill();
  console.log(ctx);
}

draw());

function play() {
  const video = document.getElementById("webcam");
  navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    video.srcObject = stream;
  });
}

play();
