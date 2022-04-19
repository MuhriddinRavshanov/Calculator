let input = document.querySelector(".input");
let numberBtn = document.querySelector(".number_btn");
let pilusBtn = document.querySelector(".pilus_btn");
let minusBtn = document.querySelector(".minus_btn");
let multiplyBtn = document.querySelector(".multiply_btn");
let divisionBtn = document.querySelector(".division_btn");
let pointBtn = document.querySelector(".point_btn");
let containBtn = document.querySelector(".contain_btn");
let a = "";
let res1=0, res2=0, res=0, operation="";
function numberOnclick(item){
   a += String(item);
   if(input.value.length<10){
      input.value = Number(a);
   }
}

function pointOnclick(){
   a += pointBtn.textContent;
   if(input.value.length<10){
      input.value = Number(a);
   }
   pointBtn.disabled = true;
   pointBtn.classList.add("no-drop");
}

function pilusOnclick(){
   res1 = input.value;
   a="";
   pointBtn.disabled = false;
   pointBtn.classList.remove("no-drop");
   pilusBtn.classList.add("active-btn");
   minusBtn.classList.remove("active-btn");
   multiplyBtn.classList.remove("active-btn");
   divisionBtn.classList.remove("active-btn");
   operation = "+"
}
function minusOnclick(){
   res1 = input.value;
   a="";
   pointBtn.disabled = false;
   pointBtn.classList.remove("no-drop");
   pilusBtn.classList.remove("active-btn");
   minusBtn.classList.add("active-btn");
   multiplyBtn.classList.remove("active-btn");
   divisionBtn.classList.remove("active-btn");
   operation = "-"
}
function multiplyOnclick(){
   res1 = input.value;
   a="";
   pointBtn.disabled = false;
   pointBtn.classList.remove("no-drop");
   pilusBtn.classList.remove("active-btn");
   minusBtn.classList.remove("active-btn");
   multiplyBtn.classList.add("active-btn");
   divisionBtn.classList.remove("active-btn");
   operation = "*"
}
function divisionOnclick(){
   res1 = input.value;
   a="";
   pointBtn.disabled = false;
   pointBtn.classList.remove("no-drop");
   pilusBtn.classList.remove("active-btn");
   minusBtn.classList.remove("active-btn");
   multiplyBtn.classList.remove("active-btn");
   divisionBtn.classList.add("active-btn");
   operation = "/"
}

function containOnclick(){
   res2 = input.value;
   if (operation === "+"){
      res=res1*1+res2*1;
   }
   else if (operation === "-"){
      res=res1*1-res2*1;
   }
   else if (operation === "*"){
      res=(res1*1)*(res2*1);
   }
   else if (operation === "/"){
      res=(res1*1)/(res2*1);
   }
   input.value = res;
   pointBtn.classList.remove("no-drop");
   pilusBtn.classList.remove("active-btn");
   minusBtn.classList.remove("active-btn");
   multiplyBtn.classList.remove("active-btn");
   divisionBtn.classList.remove("active-btn");
}



















// function renderBox(){
//    for(i=0; i<list.length; i++){
//       let button = document.createElement("button");
//       button.textContent = list[i];
//       if(list[i]==="="){
//          button.classList.add("contain_btn")
//       }
//       button.onclick = function(){
//          NumberOnclick(this.textContent);
//       }
//       box.appendChild(button);
//    }
// }
// renderBox();