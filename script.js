let button1=document.querySelector(".button1");
let button2=document.querySelector(".button2");
 let input1=document.querySelector(".input1");
 let input2=document.querySelector(".input2");
let result=document.querySelector(".result");

button2.onclick=function(){
  let userinput1=input1.value;
    let userinput2=input2.value;
  if(userinput1==="yes" && userinput2==="no"){
    result.innerHTML="1"
  }
  else if(userinput1==="yes" && userinput2==="yes") {
    result.innerHTML="2"
  }
    else if(userinput1==="no" && userinput2==="yes") {
    result.innerHTML="3"
  }
    else if(userinput1==="no" && userinput2==="no"){
    result.innerHTML="4"
  }
    
}



console.log(input1);
console.log(input2);