document.getElementById('menu').addEventListener('click', toggleMenu);
document.getElementById('search-icon-link').addEventListener('click', toggleMenu);

function toggleMenu() {
    const nav = document.querySelector('.navigation');
    const menu = document.getElementById('menu');
    nav.classList.toggle('open');
    menu.classList.toggle('open');
}


// // Array of product objects
// const products = [
//     {
//         image: 'images/product1.jpg', // Placeholder path
//         name: 'Product 1',
//         price: 29.99,
//         description: 'Description for Product 1'
//     },
//     {
//         image: 'images/product2.jpg', // Placeholder path
//         name: 'Product 2',
//         price: 39.99,
//         description: 'Description for Product 2'
//     },
//     {
//         image: 'images/product3.jpg', // Placeholder path
//         name: 'Product 3',
//         price: 49.99,
//         description: 'Description for Product 3'
//     }
// ];

// // Function to render products
// function renderProducts() {
//     const productList = document.getElementById('product-list');
//     products.forEach(product => {
//         const productDiv = document.createElement('div');
//         productDiv.className = 'product';
//         productDiv.innerHTML = `
//             <img src="${product.image}" alt="${product.name}">
//             <h2>${product.name}</h2>
//             <p>Price: $${product.price.toFixed(2)}</p>
//             <p>${product.description}</p>
//         `;
//         productList.appendChild(productDiv);
//     });
// }

// // Call the function to render products on page load
// document.addEventListener('DOMContentLoaded', renderProducts);