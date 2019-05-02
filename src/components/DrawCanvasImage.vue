
<template>
<div class="drawCanvas" :style="{ backgroundImage: `url(${myImage})` }">
  <img class="illustrationImage" :src="illustrationImage" :alt="illustrationDescription">
</div>
</template>

<script>
/* eslint-disable */

export default {
  name: "drawCanvas",
  data() {
    return {
      myImage: this.$store.state.myImage,
      illustrationImage: this.$store.state.illustrationImage,
      illustrationDescription: this.$store.state.illustrationDescription
    };
  },
  mounted() {
    var image = document.querySelector(".illustrationImage");
    var imageCanvas = document.createElement("canvas");
    var imageCanvasContext = imageCanvas.getContext("2d");
    var lineCanvas = document.createElement("canvas");
    var lineCanvasContext = lineCanvas.getContext("2d");
    var pointLifetime = 1000;
    var points = [];

    if (image.complete) {
      start();
    } else {
      image.onload = start;
    }


    function start() {
      imageCanvas.addEventListener("mousemove", onMouseMove);
      imageCanvas.addEventListener("touchmove", onTouchMove);
      window.addEventListener("resize", resizeCanvases);
      document.querySelector(".drawCanvas").appendChild(imageCanvas);
      resizeCanvases();
      tick();
    }


    function onMouseMove(event) {
      var rect = imageCanvas.getBoundingClientRect();
      points.push({
        time: Date.now(),
        x: event.pageX - rect.left,
        y: event.pageY - rect.top
      });
    }

    function onTouchMove(event) {
      var touch = event.targetTouches[0];
      var rect = imageCanvas.getBoundingClientRect();
      points.push({
        time: Date.now(),
        x: touch.pageX - rect.left,
        y: touch.pageY - rect.top
      });
    }

    function resizeCanvases() {
      imageCanvas.width = lineCanvas.width = document.querySelector('.photoContainer').offsetWidth
      imageCanvas.height = lineCanvas.height = document.querySelector('.photoContainer').offsetHeight
    }

    function tick() {
      // Remove old points
      points = points.filter(function(point) {
        var age = Date.now() - point.time;
        return age < pointLifetime;
      });

      drawLineCanvas();
      drawImageCanvas();
      requestAnimationFrame(tick);
    }

    function drawLineCanvas() {
      var minimumLineWidth = 80;
      var maximumLineWidth = 80;
      var lineWidthRange = maximumLineWidth - minimumLineWidth;
      var maximumSpeed = 100;

      lineCanvasContext.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
      lineCanvasContext.lineCap = "round";

      for (var i = 1; i < points.length; i++) {
        var point = points[i];
        var previousPoint = points[i - 1];

        // Change line width based on speed
        var distance = getDistanceBetween(point, previousPoint);
        var speed = Math.max(0, Math.min(maximumSpeed, distance));
        var percentageLineWidth = (maximumSpeed - speed) / maximumSpeed;
        lineCanvasContext.lineWidth = minimumLineWidth + percentageLineWidth * lineWidthRange;

        // Fade points as they age
        var age = Date.now() - point.time;
        var opacity = (pointLifetime - age) / pointLifetime;
        lineCanvasContext.strokeStyle = "rgba(0, 0, 0, " + opacity + ")";

        lineCanvasContext.beginPath();
        lineCanvasContext.moveTo(previousPoint.x, previousPoint.y);
        lineCanvasContext.lineTo(point.x, point.y);
        lineCanvasContext.stroke();
      }
    }


    function getDistanceBetween(a, b) {
      return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    }

    function drawImageCanvas() {
      let dpi = window.devicePixelRatio;


      if (document.querySelector('.drawCanvas') != null) {
        imageCanvas.width = document.querySelector('.drawCanvas').offsetWidth;
        imageCanvas.height = document.querySelector('.drawCanvas').offsetHeight;
      }

      // Emulate background-size: cover
      var width = imageCanvas.width;
      var height = imageCanvas.width / image.naturalWidth * image.naturalHeight;

      if (height < imageCanvas.height) {
        width = imageCanvas.height / image.naturalHeight * image.naturalWidth;
        height = imageCanvas.height;
      }



      imageCanvasContext.clearRect(0, 0, width, height);
      imageCanvasContext.globalCompositeOperation = "source-over";
      imageCanvasContext.drawImage(image, 0, 0, width, height);
      imageCanvasContext.globalCompositeOperation = "destination-in";
      imageCanvasContext.drawImage(lineCanvas, 0, 0);
    }
  },

};
</script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style  lang="scss">
@import '@/styles/_variables.scss';
.drawCanvas {
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 785px;
  padding-bottom: 73%;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  animation: mobileText 0.5s ease;
  animation-fill-mode: forwards;


  @include tablet{
    padding-bottom: 72%;
  }

  @include mobile{
    padding-bottom: 77%;
  }



  .illustrationImage {
    display: none;
    width: 100%;
  }

  canvas{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
}
</style>
