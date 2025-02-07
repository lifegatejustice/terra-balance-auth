// JavaScript for handling product functionalities

// Array of eco-friendly products
const ecoFriendlyProducts = [
    {
        id: 1,
        name: "Organic Tomatoes",
        description: "Fresh organic tomatoes grown without pesticides.",
        price: 3.99,
        image: "images/tomatoes.jpg"
    },
    {
        id: 2,
        name: "Free-Range Eggs",
        description: "Eggs from free-range chickens, rich in flavor.",
        price: 4.99,
        image: "images/fresheggs.jpg"
    },
    {
        id: 3,
        name: "Compost",
        description: "Nutrient-rich compost for your garden.",
        price: 5.49,
        image: "images/compost.jpg"
    },
    {
        id: 4,
        name: "Organic Cassava",
        description: "Sustainably farmed cassava, perfect for cooking.",
        price: 2.99,
        image: "images/cassava-farming.webp"
    },
    {
        id: 5,
        name: "Fresh Fish",
        description: "Locally sourced fresh fish, caught sustainably.",
        price: 10.99,
        image: "images/catfish-farming.webp"
    },
    {
        id: 6,
        name: "Organic Chicken",
        description: "Free-range organic chicken, hormone-free.",
        price: 12.99,
        image: "images/chicken-farming.webp"
    },
    {
        id: 7,
        name: "Plantain",
        description: "Fresh plantains, perfect for frying or baking.",
        price: 1.99,
        image: "images/plantain-farming.webp"
    },
    {
        id: 8,
        name: "Goat Meat",
        description: "Sustainably sourced goat meat, rich in flavor.",
        price: 15.99,
        image: "images/goat-farming.webp"
    },
    {
        id: 9,
        name: "Snail",
        description: "Farm-raised snails, a delicacy for gourmet dishes.",
        price: 8.99,
        image: "images/snail-farming.webp"
    },
    {
        id: 10,
        name: "Fresh Herbs",
        description: "A variety of fresh herbs for your cooking needs.",
        price: 2.49,
        image: "images/herbs.jpg" // Placeholder image
    }
];

// Function to display products
function displayProducts() {
    const productContainer = document.querySelector('.product-container');
    ecoFriendlyProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button></div>
        `;
        productCard.onclick = function() {
            window.location.href = `product-details.html?id=${product.id}`;
        };
        productContainer.appendChild(productCard);
    });
}

// Call the displayProducts function on page load
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    const form = document.getElementById('new-product-form');
    form.addEventListener('submit', submitProduct);
});
