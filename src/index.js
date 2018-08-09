function loadSVG() {
  console.log("sdsds");
  // math trick 2*pi*57 = 358, must be less than 360 degree
  var circle = document.getElementById("green-halo");
  var myTimer = document.getElementById("myTimer");
  var circumstance = 2 * Math.PI * 57;
  var interval = (60 * 1000) / circumstance;
  var angle = 0;

  var i = 0;
  window.timer = window.setInterval(
    function() {
      debugger;
      console.log(i * interval);
      circle.setAttribute("stroke-dasharray", angle + ", 20000");
      myTimer.innerHTML = parseInt((angle / circumstance) * 100) + "%";

      if (angle >= circumstance) {
        window.clearInterval(window.timer);
      }
      angle += 1;
    }.bind(this),
    interval
  );
}

loadSVG();
