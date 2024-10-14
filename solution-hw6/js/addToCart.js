document.addEventListener('DOMContentLoaded', () => {
    const fullDetailsElement = document.querySelector('.full-details');
    const templateElement = document.querySelector('.image-details');

    if (fullDetailsElement && templateElement) {
        updateCartDOM(fullDetailsElement, templateElement);
    }
});

// Update cart display
function updateCartDOM(fullDetailsElement, templateElement) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Clear existing items
    fullDetailsElement.innerHTML = '';
    
    // Re-add the template
    fullDetailsElement.appendChild(templateElement);
    
    // Create and add product elements
    cart.forEach((product, index) => {
        const productElement = createProductElement(product, templateElement, index);
        if (productElement) {
            fullDetailsElement.insertBefore(productElement, templateElement);
        }
    });
    
    updateCartTotal(cart);
}

// Create product element from template
function createProductElement(product, templateElement, index) {
    const clone = templateElement.content.cloneNode(true);
    
    const imageElement = clone.querySelector('.cart-image');
    const titleElement = clone.querySelector('.product-title');
    const glazingElement = clone.querySelector('.glazing-type');
    const packSizeElement = clone.querySelector('.pack-size');
    const priceElement = clone.querySelector('.item-price');
    const removeButton = clone.querySelector('.remove');
    
    // Set product details
    if (imageElement && rolls && rolls[product.type]) {
        imageElement.src = rolls[product.type].imageFile;
    }
    if (titleElement) titleElement.textContent = product.type + ' Cinnamon Roll';
    if (glazingElement) glazingElement.textContent = `Glazing: ${product.glazing}`;
    if (packSizeElement) packSizeElement.textContent = `Pack Size: ${product.packSize}`;
    if (priceElement) {
        const price = parseFloat(product.price);
        priceElement.textContent = isNaN(price) ? 'Price not available' : `$${price.toFixed(2)}`;
    }
    
    // Add remove button functionality
    if (removeButton) {
        removeButton.addEventListener('click', () => removeFromCart(index));
    }
    
    return clone.firstElementChild;
}

// Remove product from cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    const fullDetailsElement = document.querySelector('.full-details');
    const templateElement = document.querySelector('.image-details');
    if (fullDetailsElement && templateElement) {
        updateCartDOM(fullDetailsElement, templateElement);
    }
}

// Update cart total price
function updateCartTotal(cart) {
    const totalElement = document.getElementById('cart-total-price');
    if (totalElement) {
        const total = cart.reduce((sum, product) => sum + parseFloat(product.price || 0), 0);
        totalElement.textContent = `$${total.toFixed(2)}`;
    }
}