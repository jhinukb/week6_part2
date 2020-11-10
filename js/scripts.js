function showImage(image) {
  var a = document.getElementById('img_flavor');

  // var drop = document.getElementById("dropdown");
  // var text = drop.options[drop.selectedIndex].text;
  // if (text == 'Matcha') {
  //   a.src = "img/matcha.jpg";
  // }
  if(image == "") {
  a.src ="";
} else if (image == "matcha") {
    a.src = "img/matcha.jpg";
  }
  else if (image == "strawberry") {
    a.src = "img/strawberry.jpg";
  }
  else if (image == "chocolate") {
    a.src = "img/chocolate.jpg";
  }
}
