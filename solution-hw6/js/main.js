//------------------- INITIALIZING VARS -------------------//

document.addEventListener('DOMContentLoaded', () => {
    const glazeSelect = document.getElementById('glaze');
    const sizeSelect = document.getElementById('size');
    const addToCartButton = document.getElementById('add-cart');
    const totalPriceElement = document.getElementById('total-price');
    const glazingDisplay = document.getElementById('glazing-display');
    const packSizeDisplay = document.getElementById('packsize-display');

    // Initialize product data
    let productData = {
        type: '',
        glazing: 'Keep original',
        packSize: 1,
        price: 0
    };

    // Populate dropdowns
    if (glazeSelect) populateGlaze(glazeSelect);
    if (sizeSelect) populateSize(sizeSelect);

    // Add event listeners
    if (glazeSelect) glazeSelect.addEventListener('change', updateProductData);
    if (sizeSelect) sizeSelect.addEventListener('change', updateProductData);
    if (addToCartButton) addToCartButton.addEventListener('click', addToCart);

    // Update product data based on user selections
    function updateProductData() {
        if (glazeSelect && sizeSelect && currentRoll) {
            productData.glazing = glazeSelect.value;
            productData.packSize = parseInt(sizeSelect.value);
            productData.type = currentRoll.type;
            
            const glazingPrice = glazeOptionList[productData.glazing] || 0;
            const sizeMultiplier = packSizeList[productData.packSize] || 1;
            productData.price = (currentRoll.basePrice + glazingPrice) * sizeMultiplier;
            
            updateDisplay();
        }
    }

    // Update price display based on user selections
    function updateDisplay() {
        if (totalPriceElement) {
            totalPriceElement.textContent = `$${productData.price.toFixed(2)}`;
        }
        if (glazingDisplay) {
            glazingDisplay.textContent = `Glazing: ${productData.glazing}`;
        }
        if (packSizeDisplay) {
            packSizeDisplay.textContent = `Pack Size: ${productData.packSize}`;
        }
    }

    // Add current product to cart
    function addToCart() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(productData);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Initial update of product data
    updateProductData();
});

//------------------- OPTION LISTS -------------------//

// Glaze option dictionary 
const glazeOptionList = {
    'Keep original': 0,
    'Sugar milk': 0,
    'Vanilla milk': 0.5,
    'Double chocolate': 1.5 
};

// Pack size option dictionary
const packSizeList = {
    '1': 1,
    '3': 3,
    '6': 5,
    '12': 10 
};

//------------------- FUNCTIONS -------------------//

// Dynamically populating glaze option values    
function populateGlaze(selectElement) {
    for (let glaze in glazeOptionList) {
        const option = document.createElement('option');
        option.text = glaze;
        option.value = glaze;
        selectElement.appendChild(option);
    }
}

// Dynamically populating pack option values    
function populateSize(selectElement) {
    for (let size in packSizeList) {
        const option = document.createElement('option');
        option.text = size;
        option.value = size;
        selectElement.appendChild(option);
    }
}