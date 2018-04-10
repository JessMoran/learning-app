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

getInfo.addEventListener("click", getData,hideInfo);


function hideInfo (){

}


function getData (){
 let info = test[0];
   let descr = info.information.description;
   let inst = info.information.instructions;


 }
