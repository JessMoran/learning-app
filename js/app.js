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

// MENU HOME
// 
  var elem = document.querySelector('.sidenav');
  var instance = M.Sidenav.init(elem, options);

  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
  var collapsibleElem = document.querySelector('.collapsible');
  var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
       