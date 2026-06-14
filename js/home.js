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

let carousel = document.getElementById('carousel');
bestSellers.forEach((object) => {
    let html = 
    `<div class="best-seller-item">\n\t<div class="best-seller-name">\n\t\t<h3>${object.name}</h3>\n\t</div>\n\t<div class="best-seller-price">\n\t\t<h3>${object.price}k</h3>\n\t</div>\n\t<div class="best-seller-image">\n\t\t<img src="/assets/images/menu-items/png/${object.name}.png">\n\t</div>\n</div>`;
    carousel.innerHTML += html;
});

let left = document.getElementById('left-arrow');
let right = document.getElementById('right-arrow');
let items = document.querySelectorAll('#carousel .best-seller-item');
let len = items.length;
let active = 0;
let time = 5000;
let auto = setTimeout("goRight()", time);

function goLeft() {
    let prev = active;
    if (active != 0) {
        active--;
    }
    else {
        active += len-1;
    }
    items[active].classList.add("slide-active");
    items[prev].classList.remove("slide-active");
    auto = setTimeout("goRight()", time);
}

function goRight() {
    let prev = active;
    if (active != len-1) {
        active++;
    }
    else {
        active = 0;
    }
    items[active].classList.add("slide-active");
    items[prev].classList.remove("slide-active");
    auto = setTimeout("goRight()", time);
}

left.onclick = () => {
    clearTimeout(auto);
    goLeft();
}

right.onclick = () => {
    clearTimeout(auto);
    goRight();
}

items[0].classList.add("slide-active");