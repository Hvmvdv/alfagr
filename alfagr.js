let quantity = document.querySelector(".quan");
let category = document.querySelector("#category");
let color = document.querySelector("#color");
let btn = document.querySelector(".btn");
let price = document.querySelector(".price");
let footerYear = document.querySelector(".year");
let date = new (Date);
footerYear.innerHTML = date.getFullYear();

btn.onclick = () => {
    if (quantity.value == '') {
        price.classList.add("warning");
        price.innerHTML = 'حدد الكمية!';
    } else {
        price.classList.remove("warning");
        if (category.value === 'one' && color.value === 'bw') {
            if (+quantity.value <= 10) {
                price.innerHTML = (+quantity.value * 1).toFixed(2);
            } else if (+quantity.value > 10 && +quantity.value <= 50) {
                price.innerHTML = (+quantity.value * 0.65).toFixed(2);
            } else if (+quantity.value > 50 && +quantity.value <= 200) {
                price.innerHTML = (+quantity.value * 0.60).toFixed(2);
            } else {
                price.innerHTML = (+quantity.value * 0.60).toFixed(2);
            }

        } else if (category.value === 'both' && color.value === 'bw') {
            if (+quantity.value <= 10) {
                price.innerHTML = (+quantity.value * 1).toFixed(2);
            } else if (+quantity.value > 10 && +quantity.value <= 50) {
                price.innerHTML = (+quantity.value * 0.85).toFixed(2);
            } else if (+quantity.value > 50 && +quantity.value <= 200) {
                price.innerHTML = (+quantity.value * 0.75).toFixed(2);
            } else {
                price.innerHTML = (+quantity.value * 0.75).toFixed(2);
            }
        } else if (category.value === 'one' && color.value === 'cmyk') {
            if (+quantity.value <= 10) {
                price.innerHTML = (+quantity.value * 1).toFixed(2);
            } else if (+quantity.value > 10 && +quantity.value <= 50) {
                price.innerHTML = (+quantity.value * 0.80).toFixed(2);
            } else if (+quantity.value > 50 && +quantity.value <= 200) {
                price.innerHTML = (+quantity.value * 0.75).toFixed(2);
            } else {
                price.innerHTML = (+quantity.value * 0.75).toFixed(2);
            }
        } else {
            if (+quantity.value <= 10) {
                price.innerHTML = (+quantity.value * 1).toFixed(2);
            } else if (+quantity.value > 10 && +quantity.value <= 50) {
                price.innerHTML = (+quantity.value * 0.90).toFixed(2);
            } else if (+quantity.value > 50 && +quantity.value <= 200) {
                price.innerHTML = (+quantity.value * 0.85).toFixed(2);
            } else {
                price.innerHTML = (+quantity.value * 0.85).toFixed(2);
            }
        }
    }
    event.preventDefault();
}

