// let numberBtn = document.querySelector(".number_btn");
// let pilusBtn = document.querySelector(".pilus_btn");
// let containBtn = document.querySelector(".contain_btn");
// let multiplyBtn = document.querySelector(".multiply_btn");
// let divisionBtn = document.querySelector(".division_btn");
// let minusBtn = document.querySelector(".minus_btn");
let input = document.querySelector(".input");
let box = document.querySelector(".box");
let a="";
let list = ["7", "8", "9", "÷", "4", "5", "6", "x","1", "2", "3", "-", "0", ".", "+", "="];
function renderBox(){
   for(i=0; i<list.length; i++){
      let button = document.createElement("button");
      button.textContent = list[i];
      if(i===15){
         button.classList.add("contain_btn")
      }
      button.onclick = function(){
         NumberOnclick(this.textContent);
      }
      box.appendChild(button);
   }
}
renderBox();


function NumberOnclick(b){
   a+=b;
   // if()
   if(input.value.length<10){
      input.value=Number(a);
   }
   console.log(typeOf=input.value*2);
}