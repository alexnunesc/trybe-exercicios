/* 
function chamadaFunction() {
  
} */


function emergenc(backgroundColorH3, backgroundColorSection) {

  let emergency = document.querySelector(".emergency-tasks");

  emergency.style.backgroundColor = backgroundColorSection;

  let emergencNo = document.querySelectorAll('.emergency-tasks h3');

  for (const key in emergencNo) {
    emergencNo[key].style.backgroundColor += backgroundColorH3;
  }
}
emergenc('blue', 'red');



function noUrg(backgroundColorH31, backgroundColorSection1) {

  let noUrgente = document.querySelector('.no-emergency-tasks');

  noUrgente.style.backgroundColor = backgroundColorSection1;

  let noUrgenteH3 = document.querySelectorAll('.no-emergency-tasks h3');

  for (let key in noUrgenteH3) {
    noUrgenteH3[key].style.backgroundColor += backgroundColorH31;
  }
}
noUrg('blue', 'red');

