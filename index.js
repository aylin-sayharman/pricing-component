let prices = document.getElementsByClassName("price");
let periodArray = document.getElementsByClassName("periods");
let perYear = "per year";

let checkbox = document.getElementById("checkboxId");
checkbox.addEventListener("click", function() {

    if (checkbox.checked) {
        for (let i = 0; i < prices.length; i++) {

            periodArray[i].innerText = perYear;

            let replaced = prices[i].innerText.replace(prices[i].innerText.charAt(0), '');

            let total = ((parseFloat(replaced) * 12) - (1.44 * parseFloat(replaced)));

            let totalString = total.toFixed(2);

            prices[i].innerText = "$".concat(totalString);
        }
    } else {
        for (let j = 0; j < periodArray.length; j++) {
            periodArray[j].innerText = "per month";
        }
        prices[0].innerText = "$9.99";
        prices[1].innerText = "$19.99";
        prices[2].innerText = "$29.99";
    };


})