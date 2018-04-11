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
const $testContainer = $('#test-container');
const btnInfo = document.querySelector('#send');
const $title = $('#titulo');


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


   $title.text("Learning Styles");
   let $descrText =$(`<p text ="descr">${descr}</p>`);
   let $btnNext = $(`<button id="next">Next</button>`);
   let $instText=$( `<p>${inst}</p>`);

  $testContainer.append($descrText);
  $testContainer.append($btnNext);
  $testContainer.append($instText);
 }


function getQst (){
  inquiry.filter(obj => {
    let qust = obj.question
    let ans = obj.answers

    let $divCont =$(`<div class="divContainer"></div>`);
    let $qstText = $(`<p>${qust}</p>`);
    //answer
    $testContainer.append($divCont);
    $divCont.append($qstText);
    getAns(ans)

  });
}

function getAns (ans){
  for (let i in ans) {
    paintAnswer(ans[i]);
  }
}

function paintAnswer(reply) {
  let $input = $(`<input id="test1" type="radio" name="group1"/>`);
  let $label =$(`<label for ="test3" id="answers">${reply}</label>`);

  $testContainer.append($input);
  $testContainer.append($label);
}
