//funcion que inicaliza el sideNav
$(document).ready(function(){
  $('.button-collapse').sideNav({
      menuWidth: 980,
      edge: 'left',
      closeOnClick: false,
      draggable: true
    }
  );
});


const getInfo = document.getElementById('info');

getInfo.addEventListener("click", getData);

function getData (){
 let info = test[0];
// console.log(info);
   let descr = info.information.description;
   let inst = info.information.instructions;


 }
