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

//funcion que
const sectionHide = document.querySelector('form');
const testContainer = $('#test-container');
const btnInfo = document.querySelector('#send');
const title = document.querySelector('#titulo');


sectionHide.addEventListener("click", hideInfo);
btnInfo.addEventListener("click",getInfo);
btnInfo.addEventListener("click",getQst);


function hideInfo (){
  sectionHide.style.display = "none";
}

function getInfo (){

 let info = test[0];
   let descr = info.information.description;
   let inst = info.information.instructions;

   title.textContent = "< Learning Styles";
   testContainer.append($("<p></p>").text(descr));
   testContainer.append($("<hr/>").attr("id","line").text(descr));
   testContainer.append($("<h1></h1>").attr("id","test-title").text("Test"));
   testContainer.append($("<p></p>").text(inst));
 }

function getQst (){
  inquiry.filter(obj => {
    let qust = obj.question

    testContainer.append($("<p></p>").text(qust));
    testContainer.append($("<input/>").attr("id","test1").attr("type","radio").attr("name","group1"));
    testContainer.append($("<label></label>").attr("for","test3").attr("id","answers").text("answer"));
  });
}


function getAns (){

}
