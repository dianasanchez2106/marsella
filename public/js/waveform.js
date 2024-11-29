document.addEventListener("DOMContentLoaded", () => {
  const audioContainers = document.querySelectorAll(".audio-container");

  audioContainers.forEach((container) => {
    const audio = container.querySelector("audio");
    const canvas = container.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    let audioContext, analyser, dataArray;

    function initAudio() {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioContext.createAnalyser();
      const source = audioContext.createMediaElementSource(audio);
      source.connect(analyser);
      analyser.connect(audioContext.destination);

      analyser.fftSize = 256;
      const bufferLength = analyser.frequencyBinCount;
      dataArray = new Uint8Array(bufferLength);

      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;

      draw();
    }

    function draw() {
      const WIDTH = canvas.width;
      const HEIGHT = canvas.height;

      requestAnimationFrame(draw);

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      const barWidth = (WIDTH / dataArray.length) * 2.5;
      let x = 0;

      for (let i = 0; i < dataArray.length; i++) {
        const barHeight = (dataArray[i] / 255) * HEIGHT;

        ctx.fillStyle = `rgb(50, 50, ${Math.min(200, 50 + i)})`; // Blue gradient
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    }

    audio.addEventListener("play", () => {
      if (!audioContext) {
        initAudio();
      }
      audioContext.resume();
    });
  });
});
