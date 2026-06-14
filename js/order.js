let checkOut = document.getElementById("check-out-button");
let prevView = document.getElementById("order-div");
let newView = document.getElementById("order-complete");
let items = JSON.parse(localStorage.getItem('cart'));
let orders = document.getElementById("receipt-orders");
let addons = document.getElementById("receipt-addons");
let subtotal = document.getElementById("subtotal-nominal");
let total = document.getElementById("total-nominal");
let addonItems = document.getElementById("form-addons");
let addonList = [
    {
        name: "Less sugar",
        price: 0
    },
    {
        name: "No sugar",
        price: 0
    },
    {
        name: "Less ice",
        price: 0
    },
    {
        name: "Straw",
        price: 5
    },
    {
        name: "Tissue",
        price: 5
    },
];
let currentAddonList = []

function showAddon() {
    if (currentAddonList.length > 0) {
        addons.innerHTML = '';
        currentAddonList.forEach(e => {
            let addonItem = `<div class="receipt-item-name">\n\t<p>• ${e.name}</p>\n\t<p class="addon-total-nominal">${e.price}k</p>\n\t</div>`
            addons.innerHTML += addonItem;
        })
    }
    else {
        addons.innerHTML = `<div class="receipt-item-name">\n\t<p>-</p>\n</div>`;
    }
}

function addAddon() {
    addonItems.addEventListener("click", e => {
        let position = e.target;
        if (position.classList.contains("addon")) {
            let addonName = position.parentElement.querySelector("p").innerHTML;
            let addonIndex = Array.from(addonItems.querySelectorAll("label")).findIndex(item => item.innerText == addonName);
            if(position.checked == true) {
                currentAddonList.push(addonList[addonIndex]);
                showAddon.call();
                countTotal.call();
            }
            else {
                currentAddonList.splice(addonIndex, 1);
                showAddon.call();
                countTotal.call();
            }
        }
    })
}

function addOrder() {
    orders.innerHTML = '';
    if (items.length > 0) {
        items.forEach(e => {
            let order = `<div class="receipt-item">\n\t<div class="receipt-item-name">\n\t\t<p>• ${e.name}</p>\n\t\t<p>${e.price}k x ${e.quantity}</p>\n\t</div>\n\t<div class="receipt-item-total">\n\t\t<p>Total</p>\n\t\t<p class="item-total-nominal">${e.price * e.quantity}k</p>\n\t</div>\n</div>`
            orders.innerHTML += order;
        })
    }
    else {
        orders.innerHTML = `<div class="receipt-item" style="font-family:"Baby Doll"">-</div>`;
    }
}

function countTotal() {
    let totalNominal = 0;
    let orderTotal = 0;
    let addonTotal = 0;
    let orderPrices = orders.querySelectorAll(".item-total-nominal");
    orderPrices.forEach(e => {
        let num = parseInt(e.innerHTML.substring(0, e.innerHTML.length - 1));
        orderTotal += num;
    })

    let addonPrices = addons.querySelectorAll(".addon-total-nominal");
    addonPrices.forEach(e => {
        let num = parseInt(e.innerHTML.substring(0, e.innerHTML.length - 1));
        addonTotal += num;
    })
    totalNominal = orderTotal + addonTotal;
    subtotal.innerHTML = totalNominal + 'k';
    total.innerHTML = 'TOTAL: ' + totalNominal + 'k';
}

addOrder.call();
countTotal.call();
addAddon.call();

checkOut.addEventListener("click", function() {
    let formName = document.forms["form"]["form-name"].value;
    let formEmail = document.forms["form"]["form-email"].value;
    let formAddress = document.forms["form"]["form-address"].value;
    let formPayment = document.forms["form"]["payment"].value;
    if (total.innerHTML == "TOTAL: 0k") {
        alert("You have no order");
        return false;
    }
    else if (formName == '') {
        alert("Name must be filled out");
        return false;
    }
    else if (formEmail == '') {
        alert("Email must be filled out");
        return false;
    }
    else if (formEmail.includes('@') == false) {
        alert("Email must be valid");
        return false;
    }
    else if (formAddress == '') {
        alert("Address must be filled out");
        return false;
    }
    else if (formPayment == false) {
        alert("Choose a payment");
        return false;
    }
    else {
        prevView.classList.add("hidden");
        newView.classList.remove("hidden");
        window.scrollTo(0,0); 
    }
})