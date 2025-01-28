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

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    prevButton.addEventListener('click', function() {
        carousel.scrollBy({
            top: 0,
            left: -carousel.clientWidth,
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', function() {
        carousel.scrollBy({
            top: 0,
            left: carousel.clientWidth,
            behavior: 'smooth'
        });
    });
});

// New code for customer reviews
document.addEventListener("DOMContentLoaded", function() {
    const reviews = [
        {
            name: "Alice Smith",
            rating: "★★★★☆",
            date: "2 days ago",
            title: "Great Quality!",
            text: "The organic vegetables I ordered were fresh and delicious. Highly recommend!"
        },
        {
            name: "Bob Johnson",
            rating: "★★★★★",
            date: "3 days ago",
            title: "Amazing Service!",
            text: "I received my order on time and the quality was top-notch. Will order again!"
        },
        {
            name: "Charlie Brown",
            rating: "★★★★☆",
            date: "1 week ago",
            title: "Very Satisfied",
            text: "The meat was tender and flavorful. Great experience overall."
        },
        {
            name: "Diana Prince",
            rating: "★★★★★",
            date: "1 week ago",
            title: "Best Purchase Ever!",
            text: "I loved everything about my order. The quality is unmatched!"
        },
        {
            name: "Ethan Hunt",
            rating: "★★★★☆",
            date: "2 weeks ago",
            title: "Good Value",
            text: "Great products for the price. I will definitely be back for more."
        },
        {
            name: "Fiona Gallagher",
            rating: "★★★★★",
            date: "3 weeks ago",
            title: "Highly Recommend!",
            text: "The service was excellent and the products were fresh. Very happy!"
        },
        {
            name: "George Costanza",
            rating: "★★★★☆",
            date: "1 month ago",
            title: "Will Buy Again",
            text: "Everything was great, but I wish there were more options."
        },
        {
            name: "Hannah Baker",
            rating: "★★★★★",
            date: "1 month ago",
            title: "Fantastic Experience",
            text: "I was impressed with the quality and service. Will order again!"
        },
        {
            name: "Ian Malcolm",
            rating: "★★★★☆",
            date: "2 months ago",
            title: "Good Quality",
            text: "The products were fresh and well-packaged. Satisfied with my purchase."
        },
        {
            name: "Jane Doe",
            rating: "★★★★★",
            date: "2 months ago",
            title: "Excellent!",
            text: "I loved everything about my order. The quality is fantastic!"
        }
    ];

    const reviewContainer = document.querySelector('.review-carousel');

    reviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.classList.add('review-card');

        reviewCard.innerHTML = `
            <div class="review-stars">${review.rating}</div>
            <p class="review-date">${review.date}</p>
            <h3>${review.title}</h3>
            <p>${review.text}</p>
            <p class="review-author">${review.name}, Verified Buyer</p>
        `;

        reviewContainer.appendChild(reviewCard);
    });

    const carousel = document.querySelector('.review-carousel');
    const prevButton = document.querySelector('.rprev');
    const nextButton = document.querySelector('.rnext');

    prevButton.addEventListener('click', function() {
        carousel.scrollBy({
            top: 0,
            left: -carousel.clientWidth,
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', function() {
        carousel.scrollBy({
            top: 0,
            left: carousel.clientWidth,
            behavior: 'smooth'
        });
    });
});

