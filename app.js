const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let dropdown=document.querySelectorAll(".select_container select");
let btn=document.querySelector("form button");

for(let select of dropdown){
   for(let cur in countryList){
        let newoption=document.createElement("option");
        newoption.innerText=cur;
        newoption.value=cur;
        if(select.name==="from" && cur==="USD"){
              newoption.selected="selected"
        }else if(select.name==="to" && cur==="INR"){
             newoption.selected="selected"
        }
        select.append(newoption);
   }
select.addEventListener("change",(evt)=>{
       UpdateList(evt.target);
})
}
const UpdateList=(element)=>{
    let current=element.value;
    let countrycode=countryList[current];
    let imgsor = `https://flagsapi.com/${countrycode}/flat/64.png`;
     let img=element.parentElement.querySelector("img");
    img.src=imgsor;
}
btn.addEventListener("click",()=>{
    
})