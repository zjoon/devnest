// ===== COMPLETE PRODUCT DATABASE (IDs 1 to 15) =====
// ===== COMPLETE PRODUCT DATABASE (IDs 1 to 15) with FULL DESCRIPTIONS =====
const products = {
    1: {
        name: "Chicken Leg Piece Biryani",
        price: 10.99,
        badge: "🔥 Bestseller",
        image: "food1.jpg",
        tags: "🌶️ Spicy | 💪 High Protein",
        ingredients: ["Chicken Leg Piece", "Basmati Rice", "Secret Spices", "Saffron", "Fried Onions"],
        description: "A royal biryani featuring a whole chicken leg piece marinated in exotic spices, layered with fragrant basmati rice, and slow-cooked to perfection. The meat is fall-off-the-bone tender while the rice absorbs all the aromatic flavors of saffron, cardamom, and cloves. Served with cooling raita and spicy salan. A complete meal that will transport you to the streets of Old Delhi!",
        defaultReviews: [{ name: "Ahmed R.", stars: 5, text: "Best biryani in town!", date: "2 days ago" }, { name: "Zainab M.", stars: 5, text: "The leg piece was so tender!", date: "1 week ago" }]
    },
    2: {
        name: "Special Beef Broth Nahari",
        price: 12.99,
        badge: "👑 Royal Dish",
        image: "food2.jpg",
        tags: "🌶️ Spicy | 💪 High Protein",
        ingredients: ["Beef Shanks", "Bone Broth", "Traditional Spices", "Ginger", "Garlic"],
        description: "A traditional Mughlai breakfast delicacy slow-cooked overnight for that perfect rich, velvety texture. Beef shanks are simmered with bone marrow and over 15 aromatic spices including nutmeg, mace, and cardamom. The result is a deeply flavorful, warming stew that pairs perfectly with naan or khameeri roti. Garnished with fresh ginger, green chilies, and coriander.",
        defaultReviews: [{ name: "Ali K.", stars: 5, text: "Authentic nahari!", date: "3 days ago" }, { name: "Sara M.", stars: 5, text: "The meat was falling off the bone!", date: "1 week ago" }]
    },
    3: {
        name: "Grilled Honey Garlic Chicken",
        price: 11.49,
        badge: "🔥 Chef Special",
        image: "food3.jpg",
        tags: "🍗 Grilled | 🍯 Honey Garlic",
        ingredients: ["Chicken Breast", "Honey", "Garlic", "Soy Sauce", "Roasted Vegetables"],
        description: "Succulent chicken breast marinated in a sweet and savory honey garlic sauce with a hint of ginger and chili. Grilled to perfection, resulting in a caramelized exterior and juicy interior. Served with seasonal roasted vegetables and a side of garlic butter rice. A healthier option that doesn't compromise on flavor - perfect for fitness enthusiasts!",
        defaultReviews: [{ name: "Fatima A.", stars: 5, text: "Healthy and delicious!", date: "2 days ago" }, { name: "Omar H.", stars: 4, text: "Good flavor!", date: "5 days ago" }]
    },
    4: {
        name: "Spicy Seekh Kebab with Mint",
        price: 5.99,
        badge: "🔥 Street Special",
        image: "food4.jpg",
        tags: "🌶️ Spicy | 💪 High Protein",
        ingredients: ["Minced Meat", "Secret Spices", "Mint", "Green Chili"],
        description: "Minced lamb mixed with finely chopped green chilies, fresh coriander, and a secret blend of spices, then shaped onto skewers and grilled over charcoal. The smoky, charred exterior gives way to a juicy, flavorful interior. Served with fresh mint chutney, onion rings, and a squeeze of lemon. A perfect appetizer or snack that captures the essence of Pakistani street food!",
        defaultReviews: [{ name: "Rafay S.", stars: 5, text: "Best seekh kebab!", date: "1 day ago" }, { name: "Nida K.", stars: 4, text: "Spicy and tasty!", date: "6 days ago" }]
    },
    5: {
        name: "Crispy Samosa with Chutney",
        price: 2.99,
        badge: "🍵 Tea Time Favorite",
        image: "food5.jpg",
        tags: "🥔 Veg | 🌱 Vegetarian",
        ingredients: ["Potato", "Peas", "Cumin", "Crispy Pastry", "Mint Chutney"],
        description: "Golden-brown, crispy triangular pastries filled with a spiced mixture of potatoes, peas, and cumin. The thin, flaky pastry shatters with each bite, revealing a warm, aromatic filling. Served with two house-made chutneys - sweet tamarind and spicy mint. The ultimate tea-time snack that's been a crowd favorite for generations!",
        defaultReviews: [{ name: "Zain M.", stars: 5, text: "Crispy and spicy!", date: "2 days ago" }, { name: "Ayesha R.", stars: 4, text: "Very tasty!", date: "1 week ago" }]
    },
    6: {
        name: "Gol Gappay (Pani Puri)",
        price: 3.99,
        badge: "💧 Crunchy Chatpata",
        image: "food6.jpg",
        tags: "🌶️ Spicy | 🌱 Veg",
        ingredients: ["Crispy Puri", "Spicy Water", "Chickpeas", "Tamarind Chutney"],
        description: "Crispy, hollow semolina puris filled with a burst of flavors - spicy tangy water (pani), chickpeas, potatoes, and tamarind chutney. Each piece is a perfect balance of sweet, sour, and spicy. Served with two types of flavored water - classic spicy and sweet. An explosion of taste in every bite! A must-try street food experience.",
        defaultReviews: [{ name: "Hira N.", stars: 5, text: "Best gol gappay!", date: "3 days ago" }, { name: "Sana K.", stars: 5, text: "Authentic taste!", date: "4 days ago" }]
    },
    7: {
        name: "Poori Channay",
        price: 4.99,
        badge: "🌅 Breakfast Special",
        image: "food8.jpg",
        tags: "🌱 Veg | 💪 High Protein",
        ingredients: ["Crispy Puri", "Chickpea Curry", "Aloo Sabzi", "Raita"],
        description: "Soft, fluffy deep-fried pooris served with spicy chickpea curry (channay), aloo sabzi (spiced potatoes), and cooling raita. The pooris are made fresh to order, puffing up into golden discs of perfection. This classic Pakistani breakfast is hearty, satisfying, and full of flavor. Perfect for lazy Sunday mornings!",
        defaultReviews: [{ name: "Zainab M.", stars: 5, text: "Best breakfast!", date: "2 days ago" }, { name: "Fatima A.", stars: 5, text: "Perfect Sunday brunch!", date: "5 days ago" }]
    },
    8: {
        name: "Gulab Jamun",
        price: 3.99,
        badge: "🍮 Sweet Delight",
        image: "food9.jpg",
        tags: "🍬 Sweet | 🌱 Veg",
        ingredients: ["Khoya", "Sugar Syrup", "Cardamom", "Rose Water"],
        description: "Soft, melt-in-your-mouth milk solid dumplings (khoya) deep-fried to a golden brown and soaked in fragrant sugar syrup infused with cardamom and rose water. Served warm, topped with chopped pistachios. Each bite releases a burst of sweetness that dissolves on your tongue. The perfect sweet ending to any meal!",
        defaultReviews: [{ name: "Hassan R.", stars: 5, text: "Best gulab jamun!", date: "1 day ago" }, { name: "Sara K.", stars: 5, text: "Perfect sweetness!", date: "3 days ago" }]
    },
    9: {
        name: "20% Off on Biryani",
        price: 10.99,
        badge: "🔥 FLAT 20% OFF",
        image: "food7.jpg",
        tags: "🔥 Special Offer | Limited Time",
        ingredients: ["Chicken Leg Piece", "Basmati Rice", "Secret Spices", "Saffron", "Fried Onions"],
        description: "LIMITED TIME OFFER! Enjoy our signature Chicken Leg Piece Biryani at an incredible 20% discount. Same royal taste, same premium ingredients, at a unbeatable price. Don't miss out on this deal - order now and experience why it's our bestseller! Offer valid for a limited time only.",
        defaultReviews: [{ name: "Usman K.", stars: 5, text: "Great deal!", date: "2 days ago" }, { name: "Ayesha R.", stars: 5, text: "Loved the discount!", date: "3 days ago" }]
    },
    10: {
        name: "Chicken Caesar Salad",
        price: 9.99,
        badge: "🌱 Healthy Choice",
        image: "food10.jpg",
        tags: "💪 High Protein | 🌾 Gluten-Free",
        ingredients: ["Romaine Lettuce", "Grilled Chicken", "Parmesan", "Croutons", "Caesar Dressing"],
        description: "Fresh, crisp romaine lettuce topped with grilled chicken breast, shaved parmesan cheese, crunchy croutons, and our house-made creamy Caesar dressing. The chicken is perfectly seasoned and grilled to juicy perfection. A healthy, satisfying meal that doesn't sacrifice flavor. Gluten-free option available upon request.",
        defaultReviews: [{ name: "Sarah K.", stars: 5, text: "So fresh and tasty!", date: "2 days ago" }, { name: "John D.", stars: 4, text: "Great portion size!", date: "5 days ago" }]
    },
    11: {
        name: "Shami Kebab",
        price: 6.99,
        badge: "🔥 Chef's Special",
        image: "food11.jpg",
        tags: "🌶️ Spicy | 💪 High Protein",
        ingredients: ["Minced Meat", "Lentils", "Onions", "Spices", "Mint Chutney"],
        description: "Slow-cooked minced meat patties made with a unique blend of chana dal (split chickpeas), onions, ginger, garlic, and over 12 aromatic spices. The mixture is ground to a fine paste, shaped into patties, and pan-fried until golden brown and crispy on the outside. Soft and flavorful on the inside. Served with mint chutney and fresh salad.",
        defaultReviews: [{ name: "Bilal A.", stars: 5, text: "Authentic taste!", date: "1 day ago" }, { name: "Fatima R.", stars: 4, text: "Very tasty!", date: "3 days ago" }]
    },
    12: {
        name: "Chicken Tikka",
        price: 10.99,
        badge: "🔥 BBQ Special",
        image: "food12.jpg",
        tags: "🌶️ Spicy | 💪 High Protein",
        ingredients: ["Boneless Chicken", "Yogurt", "Ginger", "Garlic", "Spices", "Mint Chutney"],
        description: "Boneless chicken pieces marinated for 6 hours in a mixture of yogurt, ginger, garlic, lemon juice, and a special blend of Pakistani spices including red chili, garam masala, and cumin. Grilled in a traditional tandoor (clay oven) until charred on the outside and juicy inside. Served with mint chutney, onion rings, and a side of naan.",
        defaultReviews: [{ name: "Hamza K.", stars: 5, text: "Best chicken tikka!", date: "2 days ago" }, { name: "Ayesha M.", stars: 5, text: "Perfectly grilled!", date: "1 week ago" }]
    },
    13: {
        name: "Pepperoni Pizza",
        price: 12.99,
        badge: "🔥 Bestseller",
        image: "food13.jpg",
        tags: "💪 High Protein | 🌶️ Spicy",
        ingredients: ["Pepperoni", "Mozzarella", "Tomato Sauce", "Thin Crust", "Italian Herbs"],
        description: "A classic Italian-American pizza topped with generous amounts of spicy pepperoni slices, melted mozzarella cheese, and our signature tangy tomato sauce on a thin, crispy crust. Finished with a sprinkle of oregano and chili flakes. Each slice is perfectly balanced - crispy, cheesy, and packed with flavor. A family favorite!",
        defaultReviews: [{ name: "Ahmed R.", stars: 5, text: "Best pepperoni pizza!", date: "2 days ago" }, { name: "Zainab M.", stars: 5, text: "Crispy crust!", date: "1 week ago" }]
    },
    14: {
        name: "Chicken Dum Biryani",
        price: 13.99,
        badge: "🍛 House Special",
        image: "food14.jpg",
        tags: "🌶️ Spicy | 💪 High Protein",
        ingredients: ["Basmati Rice", "Chicken", "Saffron", "Onions", "Whole Spices"],
        description: "Our signature Dum Biryani features tender chicken pieces and premium basmati rice, layered with caramelized onions, fresh mint, coriander, and saffron-infused milk. Sealed with dough and slow-cooked (dum style) to lock in all the flavors. The result is an aromatic, flavorful biryani where each grain of rice is separate and infused with spices. Served with raita and mirchi ka salan.",
        defaultReviews: [{ name: "Hassan R.", stars: 5, text: "Best biryani!", date: "1 day ago" }, { name: "Sara K.", stars: 5, text: "Authentic taste!", date: "3 days ago" }]
    },
    15: {
        name: "Crispy Chicken Burger",
        price: 11.99,
        badge: "🍔 Fan Favorite",
        image: "food15.jpg",
        tags: "🌶️ Spicy | 💪 High Protein",
        ingredients: ["Crispy Chicken", "Lettuce", "Pickles", "Spicy Mayo", "Brioche Bun"],
        description: "A generous crispy fried chicken patty made from tender chicken breast, coated in our secret spicy breading and fried to golden perfection. Served in a toasted brioche bun with fresh lettuce, juicy tomato slices, tangy pickles, and our signature spicy mayo. Comes with a side of crispy french fries and ketchup. A burger that will satisfy any craving!",
        defaultReviews: [{ name: "Rafay S.", stars: 5, text: "Best burger ever!", date: "2 days ago" }, { name: "Nida K.", stars: 4, text: "Delicious!", date: "4 days ago" }]
    }
};
let currentId = null;
let quantity = 1;
let selectedRating = 5;


function loadProduct() {
    const id = localStorage.getItem('selectedProductId');
    if (!id || !products[id]) {
        document.getElementById('detailsContent').innerHTML = '<p style="color:white; text-align:center;">Nothing there go to <a href="home.html" style="color: #ff6b6b;">Home</a></p>';
        return;
    }
    currentId = id;
    const p = products[currentId];

    const html = `
        <div class="food-card">
            <img src="${p.image}" alt="${p.name}">
            <div class="card-body">
                <h2>${p.badge}</h2>
                <h3>${p.name}</h3>
                <p class="price">$${p.price}</p>
                <div class="reviews-bar" id="avgRating">⭐ Calculating...</div>
                <p class="tags">${p.tags}</p>
                <div class="card-bottom">
                    <div class="qty">
                        <button class="qty-btn" id="decrQty">-</button>
                        <span id="qty-display">1</span>
                        <button class="qty-btn" id="incrQty">+</button>
                    </div>
                    <button class="add-cart-btn" id="addToCartBtn">ADD TO CART 🛒</button>
                </div>
            </div>
        </div>
        <div class="details-box">
            <h2 class="details-title">${p.name}</h2>
            <div class="section">
                <h3>📋 INGREDIENTS</h3>
                <ul>${p.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
            </div>
            <div class="section">
                <h3>📝 DESCRIPTION</h3>
                <p>${p.description}</p>
            </div>
        </div>
    `;

    document.getElementById('detailsContent').innerHTML = html;
    loadReviewsAndRating();
    setupQuantityAndCart();
}

function setupQuantityAndCart() {
    const qtyDisplay = document.getElementById('qty-display');
    const p = products[currentId];

    document.getElementById('decrQty')?.addEventListener('click', () => {
        quantity = Math.max(1, quantity - 1);
        qtyDisplay.textContent = quantity;
    });
    document.getElementById('incrQty')?.addEventListener('click', () => {
        quantity++;
        qtyDisplay.textContent = quantity;
    });
    document.getElementById('addToCartBtn')?.addEventListener('click', () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let existing = cart.findIndex(item => item.id == currentId);
        if (existing !== -1) cart[existing].quantity += quantity;
        else cart.push({ id: currentId, name: p.name, price: p.price, quantity: quantity });
        localStorage.setItem('cart', JSON.stringify(cart));

        // ✅ Cart toast with Go to Cart button
        showCartToast(`Added ${quantity} x ${p.name} to cart!`);

        quantity = 1;
        if (qtyDisplay) qtyDisplay.textContent = quantity;
    });
}

function getProductReviews() {
    let saved = localStorage.getItem(`reviews_${currentId}`);
    if (saved) return JSON.parse(saved);
    else return [...(products[currentId].defaultReviews || [])];
}

function saveProductReviews(reviews) {
    localStorage.setItem(`reviews_${currentId}`, JSON.stringify(reviews));
}

function loadReviewsAndRating() {
    const reviews = getProductReviews();
    let totalStars = 0;
    for (let i = 0; i < reviews.length; i++) totalStars += reviews[i].stars;
    const avgStars = reviews.length > 0 ? (totalStars / reviews.length).toFixed(1) : 0;
    const avgRatingElement = document.getElementById('avgRating');
    if (avgRatingElement) avgRatingElement.innerHTML = `⭐ ${avgStars} (${reviews.length}+ reviews)`;

    let reviewsHtml = `
        <div class="reviews-title-wrap">
            <button class="reviews-title-btn">Customer Reviews</button>
        </div>
        <div class="customer-reviews" id="customerReviewsContainer">
    `;

    for (let i = 0; i < reviews.length; i++) {
        const review = reviews[i];
        let stars = '';
        for (let s = 0; s < review.stars; s++) stars += '★';
        for (let s = review.stars; s < 5; s++) stars += '☆';
        const isUserReview = review.name === "You";
        reviewsHtml += `
            <div class="review-card existing-review" data-review-index="${i}">
                <div class="review-header" style="display: flex; justify-content: space-between; align-items: center;">
                    <div class="review-stars">${stars}</div>
                    ${isUserReview ? `<button class="delete-review" data-index="${i}" style="background: rgba(0,0,0,0.4); border: none; border-radius: 40px; width: 32px; height: 32px; cursor: pointer;">🗑️</button>` : ''}
                </div>
                <p>"${escapeHtml(review.text)}"</p>
                <div class="review-bottom"><span>— ${escapeHtml(review.name)}</span><span>${review.date}</span></div>
            </div>
        `;
    }

    reviewsHtml += `
        <div class="write-review-box">
            <div class="write-review-top">
                <span>Write a Review</span>
                <img src="pincel.png" alt="pencil" class="pencil-icon">
            </div>
            <div class="rating-selector">
                <span class="rating-label">Your rating:</span>
                <div class="stars-input" id="starSelector">
                    <span class="star" data-value="1">☆</span>
                    <span class="star" data-value="2">☆</span>
                    <span class="star" data-value="3">☆</span>
                    <span class="star" data-value="4">☆</span>
                    <span class="star" data-value="5">☆</span>
                </div>
            </div>
            <textarea id="reviewText" placeholder="Share your experience... (minimum 3 characters)" rows="3"></textarea>
            <button class="submit-review-btn" id="submitReviewBtn">Add Review</button>
        </div>
    </div>`;

    document.getElementById('reviewsSection').innerHTML = reviewsHtml;

    setupStarSelector();
    setupSubmitReview();
    setupDeleteReviews();
}

function setupDeleteReviews() {
    document.querySelectorAll('.delete-review').forEach(btn => {
        btn.removeEventListener('click', btn._clickHandler);
        btn._clickHandler = function () {
            const index = parseInt(this.getAttribute('data-index'));
            const reviews = getProductReviews();
            if (reviews[index] && reviews[index].name === "You") {
                reviews.splice(index, 1);
                saveProductReviews(reviews);
                loadReviewsAndRating();
                showToast("🗑️ Your review has been deleted");
            }
        };
        btn.addEventListener('click', btn._clickHandler);
    });
}

function setupStarSelector() {
    const starsSpans = document.querySelectorAll('#starSelector .star');
    function updateStarUI(rating) {
        starsSpans.forEach((star, idx) => {
            if (idx < rating) { star.textContent = '★'; star.classList.add('selected'); }
            else { star.textContent = '☆'; star.classList.remove('selected'); }
        });
    }
    starsSpans.forEach(star => {
        star.onclick = function () {
            selectedRating = parseInt(this.getAttribute('data-value'));
            updateStarUI(selectedRating);
        };
    });
    updateStarUI(5);
}

function setupSubmitReview() {
    const submitBtn = document.getElementById('submitReviewBtn');
    if (!submitBtn) return;

    const newBtn = submitBtn.cloneNode(true);
    submitBtn.parentNode.replaceChild(newBtn, submitBtn);

    newBtn.onclick = function (e) {
        e.preventDefault();
        const reviewText = document.getElementById('reviewText')?.value.trim();
        if (!reviewText) {
            alert("Please write your experience.");
            return;
        }
        if (reviewText.length < 3) {
            alert("Please write at least 3 characters.");
            return;
        }

        const reviews = getProductReviews();
        const timestamp = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        reviews.push({ name: "You", stars: selectedRating, text: reviewText, date: timestamp });
        saveProductReviews(reviews);
        document.getElementById('reviewText').value = '';
        loadReviewsAndRating();
        showToast(`⭐ Review added! ${'⭐'.repeat(selectedRating)} (${selectedRating}/5 stars)`);
    };
}

// ✅ Normal toast — sirf message ke liye (reviews, delete etc.)
function showToast(message) {
    let container = document.getElementById('toast-container');
    let toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <span class="toast-icon">✅</span>
        <span class="toast-text">${message}</span>
        <button class="toast-close" onclick="this.parentElement.remove()">✕</button>
    `;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ✅ Cart toast — "Go to Cart" button ke saath
function showCartToast(message) {
    let container = document.getElementById('toast-container');
    let toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <span class="toast-icon">🛒</span>
        <span class="toast-text">${message}</span>
        <a href="cart.html" style="
            background: white;
            color: #b30000;
            border: none;
            border-radius: 20px;
            padding: 6px 14px;
            font-size: 12px;
            font-weight: bold;
            cursor: pointer;
            text-decoration: none;
            white-space: nowrap;
            flex-shrink: 0;
        ">Go to Cart →</a>
        <button class="toast-close" onclick="this.parentElement.remove()">✕</button>
    `;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
}

function escapeHtml(str) {
    return str.replace(/[&<>]/g, function (m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const menuToggle = document.getElementById('menu-toggle');
        if (menuToggle) menuToggle.checked = false;
    });
});

document.getElementById('subscribeBtn')?.addEventListener('click', () => {
    showToast("📧 Subscribed to exclusive offers!");
});

loadProduct();