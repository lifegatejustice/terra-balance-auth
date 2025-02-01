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
            mobile: 'images/compost.jpg',
            tablet: 'images/compost-medium.jpg',
            laptop: 'images/compost-large.jpg'
        },
        heading: 'Compost Packs',
        paragraph: 'Ready to use Organic compost for gardens and farms'
    },

    {
        image: {
            mobile: 'images/fresheggs.jpg',
            tablet: 'images/fresheggs-medium.jpg',
            laptop: 'images/fresheggs-large.jpg'
        },
        heading: 'Fresh Eggs',
        paragraph: 'Nutrient-rich Eggs for your table.'
    },

    {
        image: {
            mobile: 'images/tomatoes.jpg',
            tablet: 'images/tomatoes-medium.jpg',
            laptop: 'images/tomatoes-large.jpg'
        },
        heading: 'Organic Tomatoes ',
        paragraph: 'Enjoy the rich taste of organically grown tomatoes, cultivated without synthetic pesticides or fertilizers.'
    },

    {
        image: {
            mobile: 'images/turkey.jpg',
            tablet: 'images/turkey-medium.jpg',
            laptop: 'images/turkey-large.jpg'
        },
        heading: 'Organic Turkey',
        paragraph: 'Nutrient-rich turkey for your table.'
    },

    {
        image: {
            mobile: 'images/turkey.jpg',
            tablet: 'images/turkey-medium.jpg',
            laptop: 'images/turkey-large.jpg'
        },
        heading: 'Organic Turkey',
        paragraph: 'Nutrient-rich turkey for your table.'
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
    const imageContainer = document.querySelector('.image-container picture');
    const sources = imageContainer.querySelectorAll('source');
    const img = imageContainer.querySelector('img');
    const heading = document.querySelector('.herochah2');
    const paragraph = document.querySelector('.herochap');

    const currentContent = contentArray[currentIndex];

    // Apply fade-out effect
    imageContainer.classList.add('fade-out');
    heading.classList.add('fade-out');
    paragraph.classList.add('fade-out');

    setTimeout(() => {
        sources[0].srcset = currentContent.image.laptop;
        sources[1].srcset = currentContent.image.tablet;
        img.src = currentContent.image.mobile;
        
        heading.textContent = currentContent.heading;
        paragraph.textContent = currentContent.paragraph;

        // Remove fade-out for smooth transition
        imageContainer.classList.remove('fade-out');
        heading.classList.remove('fade-out');
        paragraph.classList.remove('fade-out');
    }, 500);

    currentIndex = (currentIndex + 1) % contentArray.length;
}

// Start image cycling after 5 seconds
setTimeout(() => {
    setInterval(updateContent, 5000);
}, 5000);

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
    const reviews =[
        {
            "name": "Alice Smith",
            "rating": "★★★★☆",
            "date": "2 days ago",
            "title": "Great Quality!",
            "text": "The organic vegetables I ordered were fresh and delicious. They arrived in perfect condition, neatly packaged, and tasted amazing in my meals. I could tell they were sourced from high-quality farms, and the difference in taste was noticeable compared to what I usually get from the supermarket. I especially loved the cherry tomatoes—they were sweet, juicy, and full of flavor. It's refreshing to find a company that truly values organic produce. I will definitely be a returning customer!"
        },
        {
            "name": "Bob Johnson",
            "rating": "★★★★★",
            "date": "3 days ago",
            "title": "Amazing Service!",
            "text": "I received my order on time, and the quality was top-notch. Every item was carefully packed, and nothing was damaged during transit. The customer support team even followed up to ensure I was satisfied with my order, which was a nice touch. I ordered a variety of products, including fresh fruits, herbs, and dairy, and everything was in perfect condition. The strawberries were incredibly sweet, and the homemade butter had a rich, creamy texture that added depth to my cooking. This company has won my trust!"
        },
        {
            "name": "Charlie Brown",
            "rating": "★★★★☆",
            "date": "1 week ago",
            "title": "Very Satisfied",
            "text": "The meat was tender and flavorful, and the portion size was just right. I ordered grass-fed beef and free-range chicken, and both exceeded my expectations. The beef had a deep, rich flavor that I don't usually get from store-bought cuts, and the chicken was incredibly juicy. Cooking with such high-quality ingredients made my meals so much better. My only complaint is that I wish they had a subscription service so I could automatically receive my order every month!"
        },
        {
            "name": "Diana Prince",
            "rating": "★★★★★",
            "date": "1 week ago",
            "title": "Best Purchase Ever!",
            "text": "I loved everything about my order. The quality is unmatched, and the products were carefully packed to maintain freshness. What impressed me most was the transparency about where the food came from. Each item had details about the farm and the production process, which made me feel confident in what I was eating. The honey was raw and unfiltered, with a deep, complex flavor that tasted amazing in my tea. If you're looking for premium, farm-to-table food, this is the place to shop!"
        },
        {
            "name": "Ethan Hunt",
            "rating": "★★★★☆",
            "date": "2 weeks ago",
            "title": "Good Value",
            "text": "Great products for the price. I will definitely be back for more. The variety was impressive, and I felt like I got my money's worth. The organic eggs had deep yellow yolks, which is always a sign of high quality. The leafy greens were crisp and fresh, and they stayed that way for days after delivery. It's rare to find such good quality at reasonable prices, so I'm grateful for this service. My only suggestion would be to include a recipe guide with the produce!"
        },
        {
            "name": "Fiona Gallagher",
            "rating": "★★★★★",
            "date": "3 weeks ago",
            "title": "Highly Recommend!",
            "text": "The service was excellent, and the products were fresh. The delivery was on time, and everything was well-packaged to prevent damage. I ordered their artisan cheeses, and they were absolutely delicious! Each cheese had a unique, rich taste that paired perfectly with my homemade bread. It's clear that a lot of care goes into selecting their suppliers. This was my first order, but I'm already planning my next one. I'm recommending Terra Balance to all my friends and family!"
        },
        {
            "name": "George Costanza",
            "rating": "★★★★☆",
            "date": "1 month ago",
            "title": "Will Buy Again",
            "text": "Everything was great, but I wish there were more options available. I love what I ordered, but I'd like to see more seasonal produce and maybe some exotic fruits in the future. The organic coffee I received was absolutely amazing—it had a bold, smooth taste that made my mornings so much better. The whole experience was great, from the easy ordering process to the well-packaged delivery. If they expand their offerings, this will easily be my go-to store!"
        },
        {
            "name": "Hannah Baker",
            "rating": "★★★★★",
            "date": "1 month ago",
            "title": "Fantastic Experience",
            "text": "I was impressed with the quality and service. The food was delicious, and I could tell it was carefully sourced. The farm-fresh dairy was unlike anything I've had before—the yogurt was creamy and full of flavor, and the milk tasted so pure. The ordering process was smooth, and I loved the sustainability efforts, like the use of minimal plastic packaging. I appreciate that this company is making it easier to access truly fresh, organic food!"
        },
        {
            "name": "Ian Malcolm",
            "rating": "★★★★☆",
            "date": "2 months ago",
            "title": "Good Quality",
            "text": "The products were fresh and well-packaged. Satisfied with my purchase. The fruits and vegetables tasted great, and I loved the eco-friendly packaging. The free-range eggs had a deep, rich flavor, and the avocados were perfectly ripe. I also tried their herbal teas, which were a great addition to my collection. Overall, this was a great shopping experience, and I'll definitely be back for more!"
        },
        {
            "name": "Jane Doe",
            "rating": "★★★★★",
            "date": "2 months ago",
            "title": "Excellent!",
            "text": "I loved everything about my order. The quality is fantastic! The flavors were rich, and everything was neatly packed. The grass-fed butter was incredibly creamy, and the homemade granola was the perfect combination of crunchy and sweet. I also appreciate the handwritten note that came with my order—it made the experience feel personal. If you're looking for high-quality, responsibly sourced food, you won't be disappointed!"
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
            <p class="review-text">${review.text}</p>
            <p class="review-author"><b>${review.name},</b> Verified Buyer</p>
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

// Blog posts array
const blogPosts = [
    {
        image: 'images/goat-farming.webp',
        title: 'How Goats Eat on the Field',
        description: 'Learn about the natural grazing habits of goats and how they contribute to sustainable farming.'
    },
    {
        image: 'images/chicken-farming.webp',
        title: '1 Night Chicken Survival',
        description: 'Essential tips for overnight care and protection of your chicken flock.'
    },
    {
        image: 'images/terrabalance-logo.webp',
        title: 'Terra Balance Plan Presentation',
        description: 'Discover our comprehensive approach to sustainable farming and food production.'
    },
    {
        image: 'images/maize-farming.webp',
        title: 'How to Cultivate Maize',
        description: 'A complete guide to growing and maintaining healthy maize crops.'
    }
];

// Function to update blog posts
document.addEventListener('DOMContentLoaded', function() {
    // Update featured post
    const featuredPost = document.querySelector('.featured-post');
    featuredPost.innerHTML = `
        <img src="${blogPosts[0].image}" alt="${blogPosts[0].title}">
        <h3>${blogPosts[0].title}</h3>
        <p>${blogPosts[0].description}</p>
    `;

    // Update latest posts
    const latestPostsList = document.querySelector('.latest-posts ul');
    latestPostsList.innerHTML = ''; // Clear existing posts

    // Add all posts to the latest posts section
    blogPosts.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <a href="#">${post.title}</a>
        `;
        latestPostsList.appendChild(li);
    });
});
