let menuButtons = document.querySelectorAll('#menu-header p');
let menuItems = document.getElementById('menu-items');
let categoryTitle = document.querySelector("#menu-category h2");
let overlay = document.getElementById('overlay');
let orderList = document.getElementById('order-list');
let orderButt = document.getElementById('order-button');
let cart = [];

let bestSellers = [
    {
        name: "Vanilla Sketch Latte",
        price: 30,
        description: "smooth vanilla latte with cinnamon dust, perfect for light ideas",
    },
    {
        name: "Cold Brew Brainstorm",
        price: 52,
        description: "strong cold brew steeped 16 hours, fuel for late-night sketches",
    },
    {
        name: "Matcha Mirage Latte",
        price: 38,
        description: "vibrant iced matcha with oat milk, green like new ideas",
    },
    {
        name: "Iced Doodle Doughnut",
        price: 15,
        description: "glazed doughnut with hand-drawn icing details",
    },
    {
        name: "Graffiti Potato Bites",
        price: 25,
        description: "golden-seasoned potato bites with signature dip",
    },
];
let espressoBased =[
    {
        name: "Inkwell Espresso",
        price: 25,
        description: "a classic shot of bold, dark espresso to spark your first line",
    },
    {
        name: "Vanilla Sketch Latte",
        price: 30,
        description: "smooth vanilla latte with cinnamon dust, perfect for light ideas",
    },
    {
        name: "Mocha Manifesto Brew",
        price: 35,
        description: "rich mocha with espresso and chocolate, for bold thinkers",
    },
    {
        name: "Flat White Frame",
        price: 27,
        description: "a clean, velvety flat white for minimalists and modernists",
    },
    {
        name: "Caramel Macchiato Mural",
        price: 40,
        description: "espresso layered over milk and caramel, like painting in sips",
    },
];
let brewedCoffee = [
    {
        name: "Drip Doodle Coffee",
        price: 42,
        description: "hand-brewed drip coffee, warm and steady like pencil to paper",
    },
    {
        name: "Filter Flow V60",
        price: 55,
        description: "bright and fruity pour-over with a smooth creative finish",
    },
    {
        name: "Cold Brew Brainstorm",
        price: 52,
        description: "strong cold brew steeped 16 hours, fuel for late-night sketches",
    },
];
let nonCoffee = [
    {
        name: "Hibiscus Canvas Cooler",
        price: 40,
        description: "iced hibiscus tea with berry and citrus, refreshingly artsy",
    },
    {
        name: "Matcha Mirage Latte",
        price: 38,
        description: "vibrant iced matcha with oat milk, green like new ideas",
    },
    {
        name: "Dark Choco Dreamer",
        price: 32,
        description: "artisan dark hot chocolate with a cloud of marshmallow foam",
    },
];
let pastriesBakedGoods = [
    {
        name: "Iced Doodle Doughnut",
        price: 15,
        description: "glazed doughnut with hand-drawn icing details",
    },
    {
        name: "Citrus Sketch Scone",
        price: 27,
        description: "cranberry-orange scone with a tangy citrus drizzle",
    },
    {
        name: "Banana Muse Muffin",
        price: 25,
        description: "banana walnut muffin, warm and nostalgic like an old sketchbook",
    },
];
let snacks = [
    {
        name: "Crunchy Crayon Sticks",
        price: 25,
        description: "colorful veggie sticks with house-made hummus",
    },
    {
        name: "Graffiti Potato Bites",
        price: 25,
        description: "golden-seasoned potato bites with signature dip",
    },
    {
        name: "Queso Idea Chips",
        price: 20,
        description: "crunchy tortilla chips with spicy cheese dip on the side",
    },
];
let additionals = [
    {
        name: "Milk Mood Options",
        price: 5,
        description: "oat, almond, soy, or whole milk to match your flow",
    },
    {
        name: "Espresso Boost Shot",
        price: 15,
        description: "an extra espresso shot to intensify your canvas",
    },
    {
        name: "Syrup Swirl Add-On",
        price: 5,
        description: "caramel, hazelnut, or vanilla syrup for custom flavor",
    },
];
let all = espressoBased.concat(brewedCoffee, nonCoffee, pastriesBakedGoods, snacks, additionals);
let categories = [all, bestSellers, espressoBased, brewedCoffee, nonCoffee, pastriesBakedGoods, snacks, additionals];

addMenu(all);
nav.call(menuButtons[0]);

if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    orderButt.removeAttribute('disabled');
    addCart.call();
}
else {
    orderButt.setAttribute('disabled', true);
}

function addCartToMemory() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addCart() {
    orderList.innerHTML = '';
    if (cart.length > 0) {
        cart.forEach(e => {
            let order =
            `<div class="order-item" id="order-">\n\t<div id="order-name">\n\t\t<p>•</p>\n\t\t<p>${e.name}</p>\n\t</div>\n\t<div class="order-counter">\n\t\t<img src="/assets/vectors/minus-svgrepo-com.svg" class="minus-button">\n\t\t<p>${e.quantity}</p>\n\t\t<img src="/assets/vectors/plus-svgrepo-com.svg" class="plus-button">\n\t</div>\n</div>`;
            orderList.innerHTML += order;
        })
    }
    else {
        orderList.innerHTML = `<div class="order-item">\n\t<p>You haven't added anything</p>\n</div>`;
        orderButt.setAttribute('disabled', true);
    }
}

function nav() {
    if (menuItems.classList.contains('hidden')) {
        menuItems.classList.remove('hidden');
        overlay.classList.remove('show');
    }

    menuButtons.forEach((item) => {
        item.classList.remove("menu-active")
    });
    this.classList.add("menu-active");

    menuItems.innerHTML = "";
    let selectedCategory = categories[Array.from(menuButtons).indexOf(this)];
    addMenu(selectedCategory);
    categoryTitle.innerHTML = this.innerHTML;

    let nexts = menuItems.querySelectorAll("div div img");
    function showWindow(index) {
        menuItems.classList.add('hidden');
        overlay.classList.add('show');
        let html =
        `<img src="/assets/images/menu-items/png/${selectedCategory[index].name}.png">\n<h2 class="brown-text">${selectedCategory[index].name} - ${selectedCategory[index].price}k</h2>\n<p>${selectedCategory[index].description}</p>\n<button>Add to order</button>\n<button>Back</button>`;
        overlay.innerHTML = html;
        let overlayElements = overlay.querySelectorAll('*');
        overlayElements[4].addEventListener('click', function() {
            menuItems.classList.remove('hidden');
            overlay.classList.remove('show');
        })

        overlayElements[3].addEventListener('click', function() {
            let alert =
            `<div class="alert">\n\t<p>Item has been added</p>\n</div>`;
            overlay.innerHTML = alert;
            let itemIndex = cart.findIndex((e) => e.name == selectedCategory[index].name);
            if (itemIndex >= 0) {
                cart[itemIndex].quantity++;
            }
            else {
                if (orderList.innerHTML.includes("You haven't added anything")) {
                    orderList.innerHTML = "";
                    orderButt.removeAttribute('disabled');
                }
                cart.push({
                    name: selectedCategory[index].name,
                    price: selectedCategory[index].price,
                    quantity: 1
                })
            }

            addCart.call();
            addCartToMemory.call();

            setTimeout(function() {
                overlay.classList.remove('show');
                menuItems.classList.remove('hidden')
            }, 1500);
        })
    }

    nexts.forEach((button, index) => {
        button.addEventListener('click', showWindow.bind(null, index));
    });

    orderList.addEventListener("click", (e) => {
        let positionClick = e.target;
        if (positionClick.classList.contains("minus-button")) {
            let itemName = positionClick.parentElement.parentElement.querySelector("#order-name").querySelectorAll("p")[1].innerHTML
            let positionCart = cart.findIndex(item => item.name == itemName);
            if (positionCart >= 0) {
                let valueChange = cart[positionCart].quantity - 1;
                if (valueChange > 0) {
                    cart[positionCart].quantity = valueChange;
                }
                else {
                    cart.splice(positionCart, 1);
                }
                addCartToMemory();
                addCart();
            }
        }
        else if (positionClick.classList.contains("plus-button")) {
            let itemName = positionClick.parentElement.parentElement.querySelector("#order-name").querySelectorAll("p")[1].innerHTML
            let positionCart = cart.findIndex(item => item.name == itemName);
            if (positionCart >= 0) {
                cart[positionCart].quantity++;
            }
            addCartToMemory();
            addCart();
        }
    })
}

menuButtons.forEach((item) => {
    item.addEventListener('click', nav);
});

function addMenu(category) {
    category.forEach((object) => {
        let html = 
        `<div class="menu-item">\n\t<p>${object.name}</p>\n\t<div>\n\t\t<p>${object.price}k</p>\n\t\t<img src="/assets/vectors/plus-square-svgrepo-com.svg">\n\t</div>\n</div>`;
        menuItems.innerHTML += html;
    });
}