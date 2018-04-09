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

getInfo.addEventListener("click", newView);

function newView (test){
  test.filter(function(obj){
    console.log(obj.info);
  })
}
