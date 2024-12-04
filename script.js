let buttons = document.querySelectorAll('.btn');
let input = document.getElementById('display');
for(let button of buttons ){
   button.addEventListener('click', function() {
      let value = button.textContent;
      if(value === 'c'){
        input.value = null;
      }
      else if(['+','-','*','/'].includes(value)){
        assign(value);
      }
      else{
        input.value += value;
      }
    });
}
let firstValue = null;
let operator = null;

function assign(op){
  if(input.value !== " "){
    firstValue = parseFloat(input.value);
    operator = op;
    input.value += `${operator}`;
  }
}
function calculate(){
  if(firstValue !== null && operator && input.value !== " "){
    let spliting = input.value.split(operator);
    let secondValue = parseFloat(spliting[1]);
    let result;
  
    switch(operator){
      case  '+' :
        result = firstValue + secondValue;
        break;
      case '-' :
        result = firstValue- secondValue;
        break;
      case '*' :
        result = firstValue * secondValue;
        break;
      case '/' :
        if(secondValue === 0){
          result = "error"
        }else{
          result = firstValue / secondValue;
        }
        break;
      default :
        result = "error";

    }
    input.value = result;
  }
}
  document.getElementById('equal').addEventListener('click',calculate);
