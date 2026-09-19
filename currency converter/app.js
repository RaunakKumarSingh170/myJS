const BASE_URL =
 `https://frankfurter.dev{fromCurrency.toUpperCase()}`;

const dropdowns = document.querySelectorAll(".dropdown select");


for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText=currCode;
    newOption.value=currCode;
    if(select.name==="From" && currCode === "USD") {
        newOption.selected="selected";
    }else if (select.name==="From" && currCode === "USD") {
        newOption.selected="selected";}
    select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}


const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png` ;
    let img = element.parentElement.querySelector("img");      
    img.src=newSrc;
}


btn.addEventListener("click" , (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal==="" || amtVal<1){
        amtVal = 1;
        amount.value="1";
    }

    const URL = `BASE_URL/`
})