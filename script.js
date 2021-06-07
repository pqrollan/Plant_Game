
var plant_list = document.getElementsByClassName("plant");

//
//  Plant plant button
//
var plant_option = function() {
  console.log("Box clicked");
  document.getElementById("plant_button").classList.remove("hidden");

  plant = this;

  var plant_plant = function(plant) {
    plant.classList.add("boxed_plant");
  }

  document.getElementById("plant_button").addEventListener('click', function(){
    plant_plant(plant)}, false);
}

function init_plants(){
  for (var i=0; i<plant_list.length; i++){
    plant_list[i].addEventListener('click', plant_option, false);
  } 
}
init_plants();



//
//
//  Add Row, Add Column
//
//
var row_length= 3;
var row_size= 400;
var col_length= 2;
var col_size=300;

var add_row = function(){
  console.log("add row");
  var box_list= document.getElementsByClassName("box");

  col_length++
  col_size += 100
  box_list[0].style.height= col_size+"px";

  for (var i=0; i< row_length; i++){
    var node = document.createElement("div");
    node.classList.add("plant");
    box_list[0].appendChild(node);
  }

  init_plants();
  
}

var add_col = function(){
  console.log("add col");
  var box_list= document.getElementsByClassName("box");

  row_length++
  row_size += 120
  box_list[0].style.width= row_size+"px";

  for (var i=0; i< col_length; i++){
    var node = document.createElement("div");
    node.classList.add("plant");
    box_list[0].appendChild(node);
  }
  
  init_plants();
}



document.getElementById("add_row").addEventListener('click', 
  add_row, false);

document.getElementById("add_col").addEventListener('click', 
  add_col, false);

