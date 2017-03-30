function checkTime(){
    var date = new Date();
    var current_hour = date.getHours();
    if(current_hour<9 && current_hour>2){
        document.body.style.background = "url(resources/backgroundMorning.jpg) no-repeat center center fixed";
        document.body.style.backgroundSize= "cover";
        document.body.style.webkitBackgroundSize = "cover";
        document.body.style.mozBackgroundSize = "cover";
        document.body.style.oBackgroundSize = "cover";
    }
    if(current_hour>=9 && current_hour<18){
        document.body.style.background = "url(resources/backgroundDay.jpg) no-repeat center center fixed";
        document.body.style.backgroundSize= "cover";
        document.body.style.webkitBackgroundSize = "cover";
        document.body.style.mozBackgroundSize = "cover";
        document.body.style.oBackgroundSize = "cover";
    }
    if(current_hour>=18 || current_hour<=2){
        document.body.style.background = "url(resources/backgroundNight.jpg) no-repeat center center fixed";
        document.body.style.backgroundSize= "cover";
        document.body.style.webkitBackgroundSize = "cover";
        document.body.style.mozBackgroundSize = "cover";
        document.body.style.oBackgroundSize = "cover";
    }
}

function showSkills(){
    document.getElementById("face").style.width = "10%";
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("intro").style.display = "none";
    document.getElementById("titleSkills").style.display = "block";
    document.getElementById("name").style.display = "none";
    document.getElementById("tableSkills").style.display = "block";
    document.getElementById("arrow").style.display = "block";
    var screen_width = screen.width;
    var table_width = document.getElementById("tableSkills").clientWidth;
    var excess = (screen_width - table_width)/2;
    document.getElementById("tableSkills").style.marginRight = excess + "px";
}

function returnHome(){
    document.getElementById("face").style.width = "18%";
    document.getElementById("portfolio").style.display = "inline-block";
    document.getElementById("skills").style.display = "inline-block";
    document.getElementById("intro").style.display = "block";
    document.getElementById("titleSkills").style.display = "none";
    document.getElementById("name").style.display = "block";
    document.getElementById("tableSkills").style.display = "none";
    document.getElementById("arrow").style.display = "none";
}