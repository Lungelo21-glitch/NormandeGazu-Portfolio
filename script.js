// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

// Product filtering
const filterbuttons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterbuttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterbuttons.forEach(btn => btn.classList.remove('active'));
        //Add active to clicked button
        button.classList.add('active');

        const category = button.getAttribute('data-category');

        productCards.forEach(card => {
            if (category === 'all') {
                card.style.display = 'block';
            } else {
                if (card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                } 
            }
        })
    })
})

// Add to Cart functionality
let cartcount = 0;
const cartCountElement = document.getElementById('cartCount');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCountElement.textContent = cartCount;

        // Simple feedback
        const originalText = button.textContent;
        button.textContent = "Added!";
        button.style.backgroundColor = "#166534";

        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 1500);
    })
})