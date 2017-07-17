function editPic(){
    document.getElementById('headshot').style.opacity = "1";
    document.getElementById('headshot').style.height = "67%";
}

function changePic(){
  document.getElementById('headshot').style.opacity = "0.8";
  document.getElementById('headshot').style.height = "65%";
}

function hide(paragraph){
    document.getElementById(paragraph).style.display = "none";
}

function expand(paragraph){
    document.getElementById(paragraph).style.display = "block";
}
