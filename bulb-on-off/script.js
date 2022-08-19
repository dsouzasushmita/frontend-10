const imgsrc = document.getElementById("bulb");
const bulbBtn = document.getElementById("switch");

function toggleSwitch() {
  if (bulbBtn.innerText == "OFF") {
    imgsrc.src = "images/bulb-off.jpg";
    bulbBtn.innerText = "ON";
  } else {
    imgsrc.src = "images/bulb-on.jpg";
    bulbBtn.innerText = "OFF";
  }
}
