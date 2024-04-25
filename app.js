setInterval(function() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, "0");
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, "0");
  }, 1000);
  