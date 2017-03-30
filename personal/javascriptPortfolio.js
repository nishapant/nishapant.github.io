/**
 * Created by nishapant on 3/29/17.
 */

function mouseOn(id,id2,id3){
    document.getElementById(id).style.display = "block";
    var width = document.getElementById(id2).clientWidth;
    var height = document.getElementById(id2).clientHeight;
    document.getElementById(id3).style.maxWidth = width;
    document.getElementById(id3).style.maxHeight = height;
    width2 = document.getElementById(id3).clientWidth;

}

function mouseOut(id){
    document.getElementById(id).style.display = "none";
}