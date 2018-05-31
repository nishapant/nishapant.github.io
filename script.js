var glopalBool = False;
var runsiloBool = False;
var calcBool = False;
var blueBool = False;
var mathBool = False;
var rockBool = False;

function showprofile(name){
  switch(name){
    case 'glopal':
      glopal();
      break;
    case 'runsilo':
      runsilo();
      break;
    case 'calculator':
      calculator();
      break;
    case 'bluetooth':
      bluetooth();
      break;
    case 'mathteam':
      mathteam();
      break;
    case 'rockpaperscissors':
      rockpaperscissors();
      break;
    default:
      break;
  }
}

function glopal(){
  if(glopalBool){
    
  }else{

  }
  glopalBool= !glopalBool;
}
