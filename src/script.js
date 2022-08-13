const choiceCount = document.querySelectorAll(".color_choice").length;

// ------------loop-for-buttons---------------

for (var i = 0; i< choiceCount; i++)
  document.querySelectorAll(".color_choice")[i].addEventListener("click", function(){
    var colorName = this.innerHTML;
 
 // ------Switch-case-for-color-changing------
 
    switch(colorName){
      case "Black":
        document.querySelector(".color_display").style.background = 'black';
        document.querySelector("main").style.background = 'black';
      break;
      case "Red":
        document.querySelector(".color_display").style.background = 'red';
        document.querySelector("main").style.background = 'red';
        
      break;
      case "Yellow":
        document.querySelector(".color_display").style.background = 'yellow';
        document.querySelector("main").style.background = 'yellow';
        
      break;
      case "Blue":
        document.querySelector(".color_display").style.background = 'blue';
        document.querySelector("main").style.background = 'blue';
        
      break;
      case "Purple":
        document.querySelector(".color_display").style.background = 'purple';
        document.querySelector("main").style.background = 'purple';
        
      break;
      case "green":
        document.querySelector(".color_display").style.background = 'green';
        document.querySelector("main").style.background = 'green';
        
      break;
    }
  })


// ---------------reset-button---------------

document.querySelector(".reset").addEventListener("click", function(){
    var base = document.querySelector("main");
  var displayBox = document.querySelector(".color_display");
  base.style.background = "initial";
  displayBox.style.background = "initial";  
});

// -----------------------------------------------------------------

document.querySelector(".btn_submit2").addEventListener("click", function(){
  
  document.querySelector(".box2").style.background =
"rgb("+document.querySelector(".r").value+","+document.querySelector(".g").value +","+document.querySelector(".b").value+")";
  console.log(document.querySelector(".box2").style.background)
  document.querySelector(".color_display2").style.background =
  "rgb("+document.querySelector(".r").value+","+document.querySelector(".g").value +","+document.querySelector(".b").value+")";
  console.log(document.querySelector(".color_display2").style.background)
});


// ------------------------------------------------------------------

document.querySelector(".btn_submit").addEventListener("click", function(){
  var color_dis = document.querySelector(".color_display2");
  var color_bg = document.querySelector(".box2");
  var col = document.querySelector(".text_color").value;
  console.log(col);
  var color = console.log(color_dis.style.background)
  color_dis.style.background = col;
  
  color_bg.style.background =  col;
});
                                                        
// --------------------------------------------------------------------------------------                                                        
document.querySelector(".btn_change").addEventListener("click", function(){
  var box_hide = document.querySelector("main");
  var box2_hide = document.querySelector(".box2");
  if (box_hide.style.display === "none") {
    box_hide.style.display = "flex";
    box2_hide.style.display = "none";
  } else {
    box_hide.style.display = "none";
    box2_hide.style.display = "flex";
  }
  
});