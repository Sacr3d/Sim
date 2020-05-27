// Reference the color shape that was drawn over the image
const overlay = document.getElementById("product-shape");

// Click on a color

var el = document.getElementsByClassName("color");

for (var i = 0; i < el.length; i++) {
  el[i].onclick = changeColor;
}

function changeColor(e) {
  // get the hex color
  let hex = e.target.getAttribute("data-hex");
  // set the hex color
  overlay.style.fill = hex;
}

function changeMaterial(itemID) {
  if (itemID == "style1") {
    document
      .querySelector("image")
      .setAttribute("xlink:href", "images/style1.jpg");
  } else {
    document
      .querySelector("image")
      .setAttribute("xlink:href", "images/style2.jpg");
  }
}
