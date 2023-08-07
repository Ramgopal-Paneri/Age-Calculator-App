const day = document.getElementById("day");
const mon = document.getElementById("mon");
const year = document.getElementById("year");

const errorBlock = document.getElementById('errors');

let dayerror = document.getElementById('day-error');
let montherror = document.getElementById('month-error');
let yearerror = document.getElementById('year-error');

const button = document.getElementById("button");

errorBlock.style.display="none";

dayerror.style.visibility="hidden";
montherror.style.visibility="hidden";
yearerror.style.visibility="hidden";

let currentDate = new Date();

year.addEventListener("input", () => {
  if(year.value>currentDate.getFullYear()){
    errorBlock.style.display="inline-flex";
    yearerror.style.visibility="visible";
    year.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
  document.querySelectorAll("label")[2].style="color:hsl(0, 100%, 67%);";
return;
}
  else{errorBlock.style.display="none";
    yearerror.style.visibility="hidden";
    year.style="";
    document.querySelectorAll("label")[2].style="";
  }
});

day.addEventListener("input", () => {
  if ((year.value)%4==0 && (year.value)%100!=0 && mon.value==2){
    if(day.value>29){
      errorBlock.style.display="inline-flex";
      dayerror.style.visibility="visible";
            day.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
      document.querySelectorAll("label")[0].style="color:hsl(0, 100%, 67%);";
return;
    }else{
      errorBlock.style.display="none";
      dayerror.style.visibility="hidden";
      day.style="";
       document.querySelectorAll("label")[0].style="";
    }
} else if (year.value%400==0) {
  if(day.value>29){
    errorBlock.style.display="inline-flex";
    dayerror.style.visibility="visible";
          day.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
      document.querySelectorAll("label")[0].style="color:hsl(0, 100%, 67%);";
 return;
    }else{
    errorBlock.style.display="none";
    dayerror.style.visibility="hidden";
    day.style="";
       document.querySelectorAll("label")[0].style="";
  }
}
else {
  if(day.value>28){
    errorBlock.style.display="inline-flex";
    dayerror.style.visibility="visible";
          day.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
      document.querySelectorAll("label")[0].style="color:hsl(0, 100%, 67%);";
 return;
    }else{
    errorBlock.style.display="none";
    dayerror.style.visibility="hidden";
    day.style="";
       document.querySelectorAll("label")[0].style="";
  }
}if(mon.value==1 || mon.value==3 || mon.value==5 || mon.value==7 || mon.value==9 || mon.value==11 ){
  if(day.value>31){
    errorBlock.style.display="inline-flex";
    dayerror.style.visibility="visible";
          day.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
      document.querySelectorAll("label")[0].style="color:hsl(0, 100%, 67%);";
return;
  }else  if(mon.value==4 || mon.value==6 || mon.value==8 || mon.value==10 || mon.value==12){
    if(day.value>30){
       errorBlock.style.display="inline-flex";
    montherror.style.visibility="visible";
    dayerror.style.visibility="visible";
          day.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
      document.querySelectorAll("label")[0].style="color:hsl(0, 100%, 67%);";
      mon.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
      document.querySelectorAll("label")[1].style="color:hsl(0, 100%, 67%);";
 return;
    }
  }
  else{
    errorBlock.style.display="none";
    dayerror.style.visibility="hidden";
    mon.style="";
    document.querySelectorAll("label")[1].style="";
    day.style="";
       document.querySelectorAll("label")[0].style="";
  }
}else{
  if(day.value>30){
    errorBlock.style.display="inline-flex";
    dayerror.style.visibility="visible";
          day.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
      document.querySelectorAll("label")[0].style="color:hsl(0, 100%, 67%);";
return;
  }else{
    errorBlock.style.display="none";
    dayerror.style.visibility="hidden";

    day.style="";
       document.querySelectorAll("label")[0].style="";
  }
}
});
mon.addEventListener("change",() => {
  if(mon.value>12 || mon.value<1){
    errorBlock.style.display="inline-flex";
    montherror.style.visibility="visible";
    mon.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
    document.querySelectorAll("label")[1].style="color:hsl(0, 100%, 67%);";return;
  }
  else{
    errorBlock.style.display="none";
    montherror.style.visibility="hidden";
    mon.style="";
    document.querySelectorAll("label")[1].style="";
  }
  if(mon.value == ""){
    errorBlock.style.display="none";
    montherror.style.visibility="hidden";
    mon.style="";
    document.querySelectorAll("label")[1].style="";return;
  }else if(day.value>28 && mon.value==2){
    errorBlock.style.display="inline-flex";
    montherror.style.visibility="visible";
    dayerror.style.visibility="visible";
          day.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
      document.querySelectorAll("label")[0].style="color:hsl(0, 100%, 67%);";
      mon.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
    document.querySelectorAll("label")[1].style="color:hsl(0, 100%, 67%);";return;
  }else  if(mon.value==1 || mon.value==3 || mon.value==5 || mon.value==7 || mon.value==9 || mon.value==11 ){
    if(day.value>31){
      errorBlock.style.display="inline-flex";
      dayerror.style.visibility="visible";
      montherror.style.visibility="visible";
            day.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
      document.querySelectorAll("label")[0].style="color:hsl(0, 100%, 67%);";
      mon.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
    document.querySelectorAll("label")[1].style="color:hsl(0, 100%, 67%);";return;
    }else if(mon.value==4 || mon.value==6 || mon.value==8 || mon.value==10 || mon.value==12){
    if(day.value>30){
       errorBlock.style.display="inline-flex";
    montherror.style.visibility="visible";
    dayerror.style.visibility="visible";
          day.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
      document.querySelectorAll("label")[0].style="color:hsl(0, 100%, 67%);";
      mon.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
      document.querySelectorAll("label")[1].style="color:hsl(0, 100%, 67%);";return;
    }
    }
else{  errorBlock.style.display="none";
      dayerror.style.visibility="hidden";
      montherror.style.visibility="hidden";
      day.style="";
       document.querySelectorAll("label")[0].style="";
       mon.style="";
    document.querySelectorAll("label")[1].style="";
    }
  }else{
    if(day.value>30){
      errorBlock.style.display="inline-flex";
      dayerror.style.visibility="visible";
      montherror.style.visibility="visible";
            day.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
      document.querySelectorAll("label")[0].style="color:hsl(0, 100%, 67%);";
      mon.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
    document.querySelectorAll("label")[1].style="color:hsl(0, 100%, 67%);";return;
    }else{
      errorBlock.style.display="none";
      dayerror.style.visibility="hidden";
      montherror.style.visibility="hidden";
      day.style="";
       document.querySelectorAll("label")[0].style="";
       mon.style="";
       document.querySelectorAll("label")[1].style="";
      }
  }
});
mon.addEventListener("input", () => {
  if(mon.value>12 || mon.value<1){
    errorBlock.style.display="inline-flex";
    montherror.style.visibility="visible";
    mon.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
    document.querySelectorAll("label")[1].style="color:hsl(0, 100%, 67%);";return;
  }
  else{
    errorBlock.style.display="none";
    montherror.style.visibility="hidden";
    mon.style="";
    document.querySelectorAll("label")[1].style="";
  }
  if(mon.value == ""){
    errorBlock.style.display="none";
    montherror.style.visibility="hidden";
    mon.style="";
    document.querySelectorAll("label")[1].style="";return;
  }
});
mon.addEventListener("change", () => {
  if(mon.value>12 || mon.value<1){
    errorBlock.style.display="inline-flex";
    montherror.style.visibility="visible";
    mon.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
    document.querySelectorAll("label")[1].style="color:hsl(0, 100%, 67%);";return;
  }
  else{
    errorBlock.style.display="none";
    montherror.style.visibility="hidden";
    mon.style="";
    document.querySelectorAll("label")[1].style="";
  }
  if(mon.value == "" ){
    errorBlock.style.display="none";
    montherror.style.visibility="hidden";
    mon.style="";
    document.querySelectorAll("label")[1].style="";return;
  }
});
mon.addEventListener("input",() => {
  if(mon.value>12 || mon.value<1){
    errorBlock.style.display="inline-flex";
    montherror.style.visibility="visible";
    mon.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
    document.querySelectorAll("label")[1].style="color:hsl(0, 100%, 67%);";return;
  }
  else{
    errorBlock.style.display="none";
    montherror.style.visibility="hidden";
    mon.style="";
    document.querySelectorAll("label")[1].style="";
  }
  if(mon.value == ""){
    errorBlock.style.display="none";
    montherror.style.visibility="hidden";
    mon.style="";
    document.querySelectorAll("label")[1].style="";return;
  }else if(day.value>28 && mon.value==2){
    errorBlock.style.display="inline-flex";
    montherror.style.visibility="visible";
    dayerror.style.visibility="visible";
          day.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
      document.querySelectorAll("label")[0].style="color:hsl(0, 100%, 67%);";
      mon.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
    document.querySelectorAll("label")[1].style="color:hsl(0, 100%, 67%);";
  }else  if(mon.value==1 || mon.value==3 || mon.value==5 || mon.value==7 || mon.value==9 || mon.value==11 ){
    if(day.value>31){
      errorBlock.style.display="inline-flex";
      dayerror.style.visibility="visible";
      montherror.style.visibility="visible";
            day.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
      document.querySelectorAll("label")[0].style="color:hsl(0, 100%, 67%);";
      mon.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
    document.querySelectorAll("label")[1].style="color:hsl(0, 100%, 67%);";
    }else if(mon.value==4 || mon.value==6 || mon.value==8 || mon.value==10 || mon.value==12){
    if(day.value>30){
       errorBlock.style.display="inline-flex";
    montherror.style.visibility="visible";
    dayerror.style.visibility="visible";
          day.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
      document.querySelectorAll("label")[0].style="color:hsl(0, 100%, 67%);";
      mon.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
      document.querySelectorAll("label")[1].style="color:hsl(0, 100%, 67%);";
    }
    }
else{  errorBlock.style.display="none";
      dayerror.style.visibility="hidden";
      montherror.style.visibility="hidden";
      day.style="";
       document.querySelectorAll("label")[0].style="";
       mon.style="";
    document.querySelectorAll("label")[1].style="";
    }
  }else{
    if(day.value>30){
      errorBlock.style.display="inline-flex";
      dayerror.style.visibility="visible";
      montherror.style.visibility="visible";
            day.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
      document.querySelectorAll("label")[0].style="color:hsl(0, 100%, 67%);";
      mon.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
    document.querySelectorAll("label")[1].style="color:hsl(0, 100%, 67%);";
    }else{
      errorBlock.style.display="none";
      dayerror.style.visibility="hidden";
      montherror.style.visibility="hidden";
      day.style="";
       document.querySelectorAll("label")[0].style="";
       mon.style="";
       document.querySelectorAll("label")[1].style="";
      }
  }
});

year.addEventListener("change", () => {
  if(year.value>currentDate.getFullYear()){
    errorBlock.style.display="inline-flex";
    yearerror.style.visibility="visible";
    year.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
  document.querySelectorAll("label")[2].style="color:hsl(0, 100%, 67%);";
  }
  else{errorBlock.style.display="none";
    yearerror.style.visibility="hidden";
    year.style="";
    document.querySelectorAll("label")[2].style="";
  }
if(((year.value)%4==0 && (year.value)%100!=0) && year.value>currentDate.getFullYear()){
    if(day.value>29 && mon.value==2 ){
   errorBlock.style.display="inline-flex";
   yearerror.style.visibility="visible";
   montherror.style.visibility="visible";
   dayerror.style.visibility="visible";
        day.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
      document.querySelectorAll("label")[0].style="color:hsl(0, 100%, 67%);";
      mon.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
      document.querySelectorAll("label")[1].style="color:hsl(0, 100%, 67%);";
      year.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
      document.querySelectorAll("label")[2].style="color:hsl(0, 100%, 67%);";
    }
}else if((year.value%400==0) && year.value>currentDate.getFullYear()){
if(day.value>29 && mon.value==2){
    errorBlock.style.display="inline-flex";
  yearerror.style.visibility="visible";
  montherror.style.visibility="visible";
  dayerror.style.visibility="visible";
        day.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
      document.querySelectorAll("label")[0].style="color:hsl(0, 100%, 67%);";
      mon.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
      document.querySelectorAll("label")[1].style="color:hsl(0, 100%, 67%);";
      year.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
      document.querySelectorAll("label")[2].style="color:hsl(0, 100%, 67%);";
    } }else{
    errorBlock.style.display="none";
    yearerror.style.visibility="hidden"; 
    montherror.style.visibility="hidden";
    dayerror.style.visibility="hidden"; 
    day.style="";
       document.querySelectorAll("label")[0].style="";
       mon.style="";
    document.querySelectorAll("label")[1].style="";
    year.style="";
  document.querySelectorAll("label")[2].style="";
  }
});

button.addEventListener("click",()=>{
  //validation part start
  if(day.value=="" || mon.value=="" || year.value==""){
   errorBlock.style.display="inline-flex";
  }
  else{
    errorBlock.style.display="none";
  }
  if(day.value==""){
    dayerror.style.visibility="visible";  
    day.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
    document.querySelectorAll("label")[0].style="color:hsl(0, 100%, 67%);";
    return;
  }else{
     dayerror.style.visibility="hidden";
    }
    if(mon.value == "" || mon.value>12 || mon.value<1){
      montherror.style.visibility="visible";
      mon.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
      document.querySelectorAll("label")[1].style="color:hsl(0, 100%, 67%);";
      return;
    }else{
     montherror.style.visibility="hidden";
    }
if(year.value==""){
yearerror.style.visibility="visible";
year.style="outline: .1rem solid  hsl(0, 100%, 67%);border: .1rem solid  hsl(0, 100%, 67%)";
document.querySelectorAll("label")[2].style="color:hsl(0, 100%, 67%);";
return;
}else{
yearerror.style.visibility="hidden";
}

setTimeout(()=>{day.style="";
     document.querySelectorAll("label")[0].style="";
     
     mon.style="";
     document.querySelectorAll("label")[1].style="";

     year.style="";
     document.querySelectorAll("label")[2].style="";

     errorBlock.style.display="none";},1500);
     //validation part end
    let yearVal = year.value;
    let monVal = mon.value;
    let dayVal = day.value;
let birthdate = new Date(`${yearVal}`,`${monVal}`,`${dayVal}`);

const yearFinal=currentDate.getFullYear()-birthdate.getFullYear();
let monFinal=currentDate.getMonth()-birthdate.getMonth();
const dayFinal=(30-birthdate.getDate())+currentDate.getDate();

const resultYear = document.getElementById('yearFinal');
const resultMon = document.getElementById('monFinal');
const resultDay = document.getElementById('dayFinal');
if(monFinal<0){
  monFinal=birthdate.getMonth()-currentDate.getMonth();
}
anime({
  targets: resultYear,
  innerHTML: [0,yearFinal],
  round: 1,
  easing: 'easeInOutQuad'
});
anime({
  targets: resultMon,
  innerHTML: [0,monFinal],
  round: 1,
  easing: 'easeInOutQuad'
});
anime({
  targets: resultDay,
  innerHTML: [0,dayFinal],
  round: 1,
  easing: 'easeInOutQuad'
});
});