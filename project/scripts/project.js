const drinks = [
    {
        name: "Espresso",
        price: "$3.00",
        image: "images/coffee1.webp"
    },
    {
        name: "Latte",
        price: "$4.50",
        image: "images/coffee2.webp"
    },
    {
        name: "Mocha",
        price: "$5.00",
        image: "images/coffee3.webp"
    }
];

const menu = [
    {
        name: "Espresso",
        price: "$3.00"
    },
    {
        name: "Latte",
        price: "$4.50"
    },
    {
        name: "Mocha",
        price: "$5.00"
    },
    {
        name: "Croissant",
        price: "$2.50"
    },
    {
        name: "Muffin",
        price: "$2.00"
    },
    {
        name: "Sandwich",
        price: "$5.50"
    }
];

function displayDrinks() {
    const container = document.querySelector("#drinks");
    if (!container) return;

    drinks.forEach(drink => {
        container.innerHTML += `
<div class="card">
<img src="${drink.image}" alt="${drink.name}" loading="lazy">
<h3>${drink.name}</h3>
<p>${drink.price}</p>
<button class="fav" data-name="${drink.name}">Favorite</button>
</div>
`;
    });
}

function displayMenu() {
    const container = document.querySelector("#menuItems");
    if (!container) return;

    menu.forEach(item => {
        container.innerHTML += `
<div class="card">
<h3>${item.name}</h3>
<p>${item.price}</p>
</div>
`;
    });
}

function updateFooter() {
    document.querySelector("#year").textContent = new Date().getFullYear();
    document.querySelector("#lastModified").textContent = document.lastModified;
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("fav")) {
        localStorage.setItem("favoriteDrink", e.target.dataset.name);
        alert(`Saved: ${e.target.dataset.name}`);
    }
});

document.querySelector("#contactForm")?.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;

    localStorage.setItem("visitorName", name);

    document.querySelector("#confirmation").textContent =
        `Thanks ${name}, we received your message.`;
});

displayDrinks();
displayMenu();
updateFooter();