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
        name: " Chicken",
        description: "Free chicken meat, hormone-free.",
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
    id: 11,
    name: "Fresh Basil",
    description: "A variety of fresh basil for your cooking needs.",
    price: 2.99,
    image: "images/basil.jpg"
},
{
    id: 12,
    name: "Organic Carrots",
    description: "Fresh organic carrots grown without pesticides.",
    price: 1.99,
    image: "images/carrots.jpg"
},
{
    id: 13,
    name: "Free-Range Turkey",
    description: "Eggs from free-range turkeys, rich in flavor.",
    price: 6.99,
    image: "images/turkey.jpg"
},
{
    id: 14,
    name: "Compost Tea",
    description: "Nutrient-rich compost tea for your garden.",
    price: 4.99,
    image: "images/compost-tea.jpg"
},
{
    id: 15,
    name: "Organic Quinoa",
    description: "Sustainably farmed quinoa, perfect for cooking.",
    price: 3.99,
    image: "images/quinoa.jpg"
},
{
    id: 16,
    name: "Fresh Shrimp",
    description: "Locally sourced fresh shrimp, caught sustainably.",
    price: 12.99,
    image: "images/shrimp.jpg"
},
{
    id: 17,
    name: "Organic Beef",
    description: "Free-range organic beef, hormone-free.",
    price: 14.99,
    image: "images/beef.jpg"
},
{
    id: 18,
    name: "Plantain Chips",
    description: "Fresh plantain chips, perfect for snacking.",
    price: 2.99,
    image: "images/plantain-chips.jpg"
},
{
    id: 19,
    name: "Goat Cheese",
    description: "Sustainably sourced goat cheese, rich in flavor.",
    price: 8.99,
    image: "images/goat-cheese.jpg"
},
{
    id: 20,
    name: "Snail Sauce",
    description: "Farm-raised snail sauce, a delicacy for gourmet dishes.",
    price: 9.99,
    image: "images/snail-sauce.jpg"
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
            <p><b class="price">Price: $${product.price.toFixed(2)}</b></p>
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
