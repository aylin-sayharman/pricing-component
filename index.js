let prices = document.getElementsByClassName("price");
let periodArray = document.getElementsByClassName("periods");
let perYear = "per year";

let checkbox = document.getElementById("checkboxId");
checkbox.addEventListener("click", function() {

    if (checkbox.checked) {
        for (let i = 0; i < prices.length; i++) {

            periodArray[i].innerHTML = perYear;

            let replaced = prices[i].innerHTML.replace(prices[i].innerHTML.charAt(0), '');

            let total = ((parseFloat(replaced) * 12) - (1.44 * parseFloat(replaced)));

            let totalString = total.toFixed(2);

            prices[i].innerHTML = "$".concat(totalString);
        }
    } else {
        for (let j = 0; j < periodArray.length; j++) {
            periodArray[j].innerHTML = "per month";
        }
        prices[0].innerHTML = "$9.99";
        prices[1].innerHTML = "$19.99";
        prices[2].innerHTML = "$29.99";
    };


})