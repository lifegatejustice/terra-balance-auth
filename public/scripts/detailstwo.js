// Get the product ID from the URL and convert it to a number for accurate comparisons.
const urlParams = new URLSearchParams(window.location.search);
const productId = Number(urlParams.get('id'));


        const ecoFriendlyProducts = [
    {
        id: 1,
        name: "Organic Tomatoes",
        description: "Fresh organic tomatoes grown without pesticides.",
        about: "Our organic tomatoes are cultivated in naturally enriched soil using time-honored organic practices. They benefit from meticulous care in every stage of growth, ensuring each tomato bursts with vibrant color, full flavor, and essential nutrients. Grown entirely without synthetic pesticides or fertilizers, these tomatoes embody the harmony of sustainable agriculture and taste perfection. Every tomato is handpicked at peak ripeness, guaranteeing a naturally sweet and tangy flavor profile ideal for salads, sauces, or snacking. In addition, our farming methods help conserve soil health and promote biodiversity, making these tomatoes not only a healthy choice for you but also a friend to the environment.",
        price: 3.99,
        image: "images/tomatoes.jpg"
    },
    {
        id: 2,
        name: "Free-Range Eggs",
        description: "Eggs from free-range chickens, rich in flavor.",
        about: "Our free-range eggs are produced by chickens that live in spacious, sunlit coops with plenty of room to roam. These chickens feed on a natural diet enriched with organic grains and seasonal greens, which results in eggs that are nutritionally superior, rich in omega fatty acids, and bursting with a naturally vibrant flavor. Our dedication to ethical and sustainable farming practices ensures that each egg not only supports a wholesome lifestyle but also reflects a commitment to animal welfare and environmental stewardship. Ideal for breakfast dishes or gourmet recipes, these eggs offer a robust and satisfying taste experience with every crack.",
        price: 4.99,
        image: "images/fresheggs-medium.jpg"
    },
    {
        id: 3,
        name: "Compost",
        description: "Nutrient-rich compost for your garden.",
        about: "Our nutrient-rich compost is the product of a carefully managed organic process that transforms natural waste into a powerful soil enhancer. By combining a diverse mix of organic materials and letting nature do its work through controlled decomposition, we create a compost that is teeming with beneficial microorganisms, enzymes, and nutrients. This compost improves soil structure, increases moisture retention, and promotes robust plant growth. Whether you are a home gardener or a professional landscaper, using our compost means giving your soil the natural boost it needs to thrive, all while embracing eco-friendly practices that reduce waste and support a healthier ecosystem.",
        price: 5.49,
        image: "images/compost.jpg"
    },
    {
        id: 4,
        name: "Organic Cassava",
        description: "Sustainably farmed cassava, perfect for cooking.",
        about: "Our organic cassava is cultivated under strict organic standards where each plant is nurtured using sustainable, environmentally friendly practices. Grown in nutrient-dense soil with natural compost and minimal intervention, the cassava develops a firm texture and a subtly sweet, nutty flavor that enhances both traditional and modern recipes. This root crop is not only versatile in the kitchen but also a testament to responsible farming practices that prioritize both quality and environmental integrity. Whether boiled, fried, or mashed, our cassava promises a reliable, healthful addition to your meals while supporting sustainable agriculture.",
        price: 2.99,
        image: "images/cassava-farming.webp"
    },
    {
        id: 5,
        name: "Fresh Fish",
        description: "Locally sourced fresh fish, caught sustainably.",
        about: "Our fresh fish is sourced directly from local waters and caught using sustainable fishing techniques that minimize impact on marine ecosystems. Every fish is handled with utmost care from the moment it is caught until it reaches your table, ensuring the preservation of its delicate texture and natural flavors. The fish is known for its firm, flaky meat and a taste that reflects the purity of its natural habitat. Perfect for grilling, baking, or light steaming, this product is ideal for those who value both high culinary standards and responsible environmental practices. Enjoy the confidence of knowing that your meal supports both local communities and marine conservation.",
        price: 10.99,
        image: "images/catfish-farming.webp"
    },
    {
        id: 6,
        name: "Chicken",
        description: "Free chicken meat, hormone-free.",
        about: "Our chicken is raised in an open, free-range environment that ensures each bird lives a natural and stress-free life. Without the use of hormones or antibiotics, our chickens develop naturally, resulting in meat that is tender, juicy, and rich in natural flavor. From the early stages of life through to processing, every step is designed to maintain the highest quality and nutritional integrity. Whether roasted, grilled, or stewed, our chicken provides a versatile, healthful option that aligns with ethical farming practices and the demands of modern, sustainable dining.",
        price: 12.99,
        image: "images/chicken-farming.webp"
    },
    {
        id: 7,
        name: "Plantain",
        description: "Fresh plantains, perfect for frying or baking.",
        about: "Our fresh plantains are grown in ideal tropical conditions, where warm climates and fertile soil combine to produce fruit of exceptional quality. Known for their firm texture and naturally sweet flavor, these plantains are a culinary staple in many kitchens. They are incredibly versatile—suitable for frying into crispy chips, baking into hearty casseroles, or boiling to accompany savory stews. Sustainable farming practices ensure that each plantain is produced in a manner that respects both tradition and environmental balance, providing a nutritious and flavorful ingredient that enhances your cooking and supports sustainable agriculture.",
        price: 1.99,
        image: "images/plantain-farming.webp"
    },
    {
        id: 8,
        name: "Goat Meat",
        description: "Sustainably sourced goat meat, rich in flavor.",
        about: "Our goat meat is derived from animals raised on open pastures under strict, sustainable farming practices. These goats are allowed to graze freely, ensuring they lead a healthy, active life and develop a lean, flavorful meat. Known for its robust taste and tender texture, goat meat is a favored choice among culinary experts seeking to add a unique flavor profile to stews, grills, and slow-cooked dishes. Our commitment to ethical treatment and sustainable sourcing means that every cut of meat not only meets high standards of quality but also supports responsible, environmentally friendly farming practices.",
        price: 15.99,
        image: "images/goat-farming.webp"
    },
    {
        id: 9,
        name: "Snail",
        description: "Farm-raised snails, a delicacy for gourmet dishes.",
        about: "Our farm-raised snails are cultivated in controlled, sustainable environments where each animal is cared for with precision and respect. These snails develop a delicate, earthy flavor and a uniquely tender texture that has long been prized by gourmet chefs. The farming process emphasizes natural feeding and minimal intervention, ensuring that the snails retain their authentic taste while adhering to high standards of quality and sustainability. Ideal for sophisticated recipes and experimental cuisine alike, our snails are a culinary delicacy that represents the best of traditional and innovative farming techniques.",
        price: 8.99,
        image: "images/snail-farming.webp"
    },
    {
        id: 11,
        name: "Fresh Basil",
        description: "A variety of fresh basil for your cooking needs.",
        about: "Our fresh basil is grown in a controlled environment that maximizes both its aromatic properties and its vibrant green color. Using sustainable, organic practices, we ensure that each leaf is packed with essential oils and natural flavors that enhance your culinary creations. Ideal for everything from traditional Italian pasta sauces to modern fusion dishes, our basil adds a burst of freshness and complexity to every recipe. The extended growing period and careful harvesting techniques preserve its nutritional benefits and intense flavor, making it a favorite among chefs and home cooks who value quality and sustainability.",
        price: 2.99,
        image: "images/basil.jpg"
    },
    {
        id: 12,
        name: "Organic Carrots",
        description: "Fresh organic carrots grown without pesticides.",
        about: "Our organic carrots are cultivated with care in fields where the soil is enriched naturally through crop rotation and organic composting. Free from synthetic pesticides and fertilizers, these carrots develop a deep, satisfying crunch and a naturally sweet flavor that enhances both raw and cooked dishes. The extensive growing process ensures that each carrot reaches its full nutritional potential, packed with vitamins, minerals, and antioxidants. Perfect for salads, juices, or as a healthy snack, our organic carrots are a celebration of nature’s bounty and a testament to sustainable, chemical-free agriculture.",
        price: 1.99,
        image: "images/carrots.jpg"
    },
    {
        id: 13,
        name: "Free-Range Turkey",
        description: "Eggs from free-range turkeys, rich in flavor.",
        about: "Our free-range turkey eggs are produced by turkeys that enjoy a natural, spacious environment, ensuring that every egg is laid with care and nurtured to perfection. The birds feed on a balanced, natural diet that enhances the eggs’ rich flavor and superior nutritional profile. With a firm yolk and a delicate white, these eggs offer a unique taste experience that sets them apart from conventional poultry eggs. Perfect for both traditional breakfast dishes and gourmet recipes, our turkey eggs represent the harmony between sustainable farming practices and culinary excellence.",
        price: 6.99,
        image: "images/turkey.jpg"
    },
    {
        id: 14,
        name: "Compost Tea",
        description: "Nutrient-rich compost tea for your garden.",
        about: "Our compost tea is a liquid elixir crafted through a natural fermentation process that extracts the essential nutrients and beneficial microorganisms from our premium organic compost. Rich in enzymes, vitamins, and minerals, this tea nourishes your soil, boosts plant immunity, and promotes vigorous growth. Carefully brewed in controlled conditions, it revitalizes tired soil and enhances microbial activity, leading to healthier, more resilient gardens and crops. Whether you’re a hobbyist or a professional grower, our compost tea provides an eco-friendly, highly effective solution to optimize plant health and soil vitality.",
        price: 4.99,
        image: "images/compost-tea.jpg"
    },
    {
        id: 15,
        name: "Organic Quinoa",
        description: "Sustainably farmed quinoa, perfect for cooking.",
        about: "Our organic quinoa is cultivated in high-altitude fields where natural growing conditions combine with traditional farming methods to produce a grain renowned for its nutty flavor and exceptional nutritional profile. Grown without synthetic chemicals, each tiny seed is packed with complete protein, essential amino acids, and a host of vitamins and minerals. The quinoa is harvested at its peak, ensuring maximum flavor and texture that can elevate salads, soups, and side dishes alike. Embracing both time-honored cultivation techniques and modern organic standards, our quinoa offers a healthful, versatile ingredient that embodies sustainability and quality.",
        price: 3.99,
        image: "images/quinoa.jpg"
    },
    {
        id: 16,
        name: "Fresh Shrimp",
        description: "Locally sourced fresh shrimp, caught sustainably.",
        about: "Our fresh shrimp are hand-selected from pristine local waters using sustainable fishing practices that ensure the long-term health of marine ecosystems. These shrimp are known for their firm, succulent texture and naturally sweet, briny flavor. Every step—from catching to processing—is carefully monitored to preserve freshness and nutritional value. Whether you choose to grill, sauté, or incorporate them into a delicate seafood stew, our shrimp offer a premium taste experience that marries quality with ethical sourcing. Their consistent quality makes them an excellent choice for both gourmet chefs and home cooks alike.",
        price: 12.99,
        image: "images/shrimp.jpg"
    },
    {
        id: 17,
        name: "Organic Beef",
        description: "Free-range organic beef, hormone-free.",
        about: "Our organic beef is sourced from cattle raised under the strictest organic and free-range conditions. These animals graze on natural pastures where they develop lean, nutrient-rich meat free of hormones and antibiotics. Every cut is carefully processed to retain its natural juices and robust flavor, making it ideal for a wide range of culinary applications—from grilling to slow cooking. Our ethical and sustainable farming practices ensure that the beef not only meets high standards of taste and nutrition but also contributes to a more environmentally friendly food system. Enjoy a product that is as conscientious as it is delicious.",
        price: 14.99,
        image: "images/beef.jpg"
    },
    {
        id: 18,
        name: "Plantain Chips",
        description: "Fresh plantain chips, perfect for snacking.",
        about: "Our plantain chips are crafted from carefully selected, ripe plantains that are sliced thinly and cooked to achieve the perfect balance between crunch and flavor. Each chip retains the natural sweetness and nutritional benefits of the plantain, making them an excellent alternative to conventional snack foods. Prepared using sustainable practices, these chips are low in additives and high in natural fiber, ensuring that every bite is both wholesome and satisfying. Enjoy them as a quick snack, a side with dips, or a creative addition to your culinary creations—all while knowing that you are supporting environmentally conscious agriculture.",
        price: 2.99,
        image: "images/plantain-chips.jpg"
    },
    {
        id: 19,
        name: "Goat Cheese",
        description: "Sustainably sourced goat cheese, rich in flavor.",
        about: "Our goat cheese is crafted from the milk of goats raised in open pastures where they graze naturally, resulting in a cheese that is creamy, tangy, and full of character. The traditional aging process enhances its complex flavors and smooth texture, making it a versatile addition to a wide variety of dishes. Whether crumbled over salads, melted in gourmet recipes, or enjoyed on its own, our goat cheese delivers an authentic taste that speaks to sustainable farming and artisanal craftsmanship. Each batch is produced with an emphasis on quality and environmental responsibility, ensuring a product that is as ethical as it is delectable.",
        price: 8.99,
        image: "images/goat-cheese.jpg"
    },
    {
        id: 20,
        name: "Snail Sauce",
        description: "Farm-raised snail sauce, a delicacy for gourmet dishes.",
        about: "Our snail sauce is an innovative culinary creation that captures the rich, earthy essence of farm-raised snails through a slow-cooking process. Blended with a selection of herbs, spices, and locally sourced ingredients, this sauce develops layers of flavor that are both savory and complex. It serves as a unique complement to a variety of dishes, from traditional stews to modern fusion recipes. Crafted with care and a commitment to sustainable practices, every batch of our snail sauce reflects an attention to detail that ensures a consistently delectable experience. This gourmet condiment is ideal for those looking to explore new dimensions of flavor in their cooking.",
        price: 9.99,
        image: "images/snail-sauce.jpg"
    }
];

        

const product = ecoFriendlyProducts.find(p => p.id === productId);

if (product) {
  document.getElementById('product-image').src = product.image;
  document.getElementById('product-name').innerText = product.name;
  document.getElementById('product-description').innerText = product.description;
  document.getElementById('product-about').innerText = product.about;
  document.getElementById('product-price').innerText = `$${product.price.toFixed(2)}`;
}

function updatePrice() {
  if (!product) return;
  let quantity = parseInt(document.getElementById("quantity").value) || 1;
  document.getElementById("product-price").innerText = `$${(product.price * quantity).toFixed(2)}`;
}

document.getElementById("increase-qty").addEventListener("click", function() {
  let quantityInput = document.getElementById("quantity");
  quantityInput.value = parseInt(quantityInput.value) + 1;
  updatePrice();
});

document.getElementById("decrease-qty").addEventListener("click", function() {
  let quantityInput = document.getElementById("quantity");
  if (parseInt(quantityInput.value) > 1) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
    updatePrice();
  }
});

document.getElementById("quantity").addEventListener("input", updatePrice);

// ====== CART FUNCTIONS ======

// Get the logged-in user (as a string)
function getLoggedInUser() {
    return localStorage.getItem("loggedInUser"); // Now returns a string (e.g., "Alice")
  }
  
  // Get a unique cart key based on the logged-in user (string) or guest.
  function getCartKey() {
    const user = getLoggedInUser();
    return user ? `cartItems_user_${user}` : "cartItems_guest";
  }
  

// Retrieve the user-specific cart from localStorage.
function getCartItems() {
  return JSON.parse(localStorage.getItem(getCartKey())) || [];
}

// Update every element with the 'cart-count' class.
function updateCartCount() {
  let cartItems = getCartItems();
  let count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.innerText = count;
  });
}

// Ensure the cart count is updated on page load.
document.addEventListener("DOMContentLoaded", updateCartCount);

// Listen for localStorage changes (useful for multi-tab updates).
window.addEventListener('storage', (event) => {
  if (event.key === getCartKey()) {
    updateCartCount();
  }
});

// Single event listener for adding items to the cart.
document.getElementById("add-to-cart").addEventListener("click", function() {
  if (!product) return;
  let quantity = parseInt(document.getElementById("quantity").value);
  let cartItems = getCartItems();

  // Check if the product is already in the cart.
  let existingItem = cartItems.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cartItems.push({ ...product, quantity });
  }

  // Save the updated cart.
  localStorage.setItem(getCartKey(), JSON.stringify(cartItems));

  // Provide feedback to the user.
  document.getElementById("cart-message").innerText = "Product added to cart!";
  setTimeout(() => {
    document.getElementById("cart-message").innerText = "";
  }, 2000);

  updateCartCount();
});

// ====== RELATED PRODUCTS ======

function renderRelatedProducts() {
  const relatedProductsContainer = document.getElementById('related-carousel-content');
  relatedProductsContainer.innerHTML = '';

  // Filter out the current product.
  const relatedProducts = ecoFriendlyProducts.filter(p => p.id !== productId);
  relatedProducts.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('eproduct-card');
    productCard.style.cursor = 'pointer';
    productCard.addEventListener('click', () => {
      window.location.href = `product-details.html?id=${product.id}`;
    });

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productName = document.createElement('h3');
    productName.textContent = product.name;

    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;

    const productPrice = document.createElement('b');
    productPrice.textContent = `$${product.price.toFixed(2)}`;

    productInfo.appendChild(productName);
    productInfo.appendChild(productDescription);
    productInfo.appendChild(productPrice);

    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);

    relatedProductsContainer.appendChild(productCard);
  });
}

renderRelatedProducts();

document.getElementById('prev-related').addEventListener('click', () => {
  const relatedProductsContainer = document.getElementById('related-carousel-content');
  relatedProductsContainer.scrollBy({ left: -200, behavior: 'smooth' });
});

document.getElementById('next-related').addEventListener('click', () => {
  const relatedProductsContainer = document.getElementById('related-carousel-content');
  relatedProductsContainer.scrollBy({ left: 200, behavior: 'smooth' });
});