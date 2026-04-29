const BASEURL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

let dropdown = document.querySelectorAll(".select_container select");
let btn = document.querySelector("form button");
let fromcurr = document.querySelector(".from .select1 select");
let tocurr = document.querySelector(".to .select1 select");
let msg=document.querySelector(".msg");
for (let select of dropdown) {
  for (let cur in countryList) {
    let newoption = document.createElement("option");
    newoption.innerText = cur;
    newoption.value = cur;

    if (select.name === "from" && cur === "USD") {
      newoption.selected = true;
    } else if (select.name === "to" && cur === "INR") {
      newoption.selected = true;
    }

    select.append(newoption);
  }

  select.addEventListener("change", (evt) => {
    UpdateList(evt.target);
  });
}

const UpdateList = (element) => {
  let current = element.value;
  let countrycode = countryList[current];
  let imgsor = `https://flagsapi.com/${countrycode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = imgsor;
};

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();{
  let amt = document.querySelector(".amount input");
  let amtval = amt.value;
  if (amtval === "" || amtval < 0) {
    amtval = 1;
    amt.value = "1";
  }

  console.log(fromcurr.value, tocurr.value);
  const URL = `${BASEURL}/${fromcurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  console.log(response);

  let rate = data[fromcurr.value.toLowerCase()][tocurr.value.toLowerCase()];
  console.log(rate);
  let finalamt=amtval*rate;
  console.log(finalamt);
 
  msg.innerText=`${amtval} ${fromcurr.value}=${finalamt} ${tocurr.value}`;
}
});