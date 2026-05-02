const restaurants = [
    {
        name: "Pizza Palace",
        image: "https://via.placeholder.com/250",
        price: 200
    },
    {
        name: "Burger Hub",
        image: "https://via.placeholder.com/250",
        price: 150
    },
    {
        name: "Biryani House",
        image: "https://via.placeholder.com/250",
        price: 250
    }
];

let cartCount = 0;

const list = document.getElementById("restaurant-list");

restaurants.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>Price: ₹${item.price}</p>
        <button onclick="addToCart()">Add to Cart</button>
    `;

    list.appendChild(card);
});

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}