$(document).ready(function() {
  var vwWidth = window.innerWidth;
  var containerHeight = document.getElementById("bannerContainer").offsetHeight;
  var bokehHeightWidth = "height: 100px; width: 100px;";

  (function spawnBokeh(i) {
    setTimeout(function() {
      var bokehDiv = "<div class='bokeh' id='point" + i + "'></div>";
      var topPos = Math.floor(Math.random() * containerHeight);
      var leftPos = Math.floor(Math.random() * vwWidth);
      var heightWidth = Math.floor(Math.random() * 50) + 35;
      var varOpacity = (Math.random() * (0.4 - 0.1) + 0.5).toFixed(2);

      $(bokehDiv).hide().appendTo("#bannerContainer").fadeTo(500, varOpacity).delay(2000).fadeTo(500, 0.01);
      $("#point" + i).css({
        position: "absolute",
        top: topPos + "px",
        left: leftPos + "px",
        height: heightWidth + "px",
        width: heightWidth + "px"
      });

      if (--i) spawnBokeh(i);
    }, 90);
  })(140);
});