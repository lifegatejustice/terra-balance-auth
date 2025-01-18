document.getElementById('menu').addEventListener('click', toggleMenu);
document.getElementById('search-icon-link').addEventListener('click', toggleMenu);

function toggleMenu() {
    const nav = document.querySelector('.navigation');
    const menu = document.getElementById('menu');
    nav.classList.toggle('open');
    menu.classList.toggle('open');
}

// Array of product objects
const products = [
    {
        image: 'images/turkey.jpg',
        name: 'Turkey 1',
        price: 29.99,
        description: 'Description for Turkey 1'
    },
    {
        image: 'images/turkey-medium.jpg',
        name: 'Turkey 2',
        price: 39.99,
        description: 'Description for Turkey 2'
    },
    {
        image: 'images/turkey-large.jpg',
        name: 'Turkey 3',
        price: 49.99,
        description: 'Description for Turkey 3'
    }
];

// Function to render products
function renderProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
        `;
        productList.appendChild(productDiv);
    });
}

// Call the function to render products on page load
document.addEventListener('DOMContentLoaded', renderProducts);

// New functionality for changing images and text
const contentArray = [
    {
        image: {
            mobile: 'images/turkey.jpg',
            tablet: 'images/turkey-medium.jpg',
            laptop: 'images/turkey-large.jpg'
        },
        heading: 'Fresh Turkey',
        paragraph: 'Sustainably sourced turkey from local farms.'
    },
    {
        image: {
            mobile: 'images/turkey.jpg',
            tablet: 'images/turkey-medium.jpg',
            laptop: 'images/turkey-large.jpg'
        },
        heading: 'Organic Turkey',
        paragraph: 'Nutrient-rich turkey for your table.'
    }
];

let currentIndex = 0;

function updateContent() {
    const imageContainer = document.querySelector('.image-container img');
    const heading = document.querySelector('.herochah2'); // Updated to class selector
    const paragraph = document.querySelector('.herochap'); // Updated to class selector


    const currentContent = contentArray[currentIndex];
    const screenWidth = window.innerWidth;

    if (screenWidth < 426) {
        imageContainer.src = currentContent.image.mobile;
    } else if (screenWidth < 794) {
        imageContainer.src = currentContent.image.tablet;
    } else {
        imageContainer.src = currentContent.image.laptop;
    }

    heading.textContent = currentContent.heading;
    paragraph.textContent = currentContent.paragraph;

    currentIndex = (currentIndex + 1) % contentArray.length;
}

setInterval(updateContent, 5000);
