//---------------------CART INTERACTIONS---------------------//

// Initializing cart array
finalCart = [];

// Cart items object
const cinnamonRolls = {
    "Original": {
        "glazing": "Sugar Milk",
        "glazingPrice": 0,
        "packSize": 1,
        "packPrice": 1,
        "basePrice": 2.49,
        "url": "../assets/products/original-cinnamon-roll.jpg"
    },
    "Walnut": {
        "glazing": "Vanilla Milk",
        "glazingPrice": .5,
        "packSize": 12,
        "packPrice": 10,
        "basePrice": 3.49,
        "url": "../assets/products/walnut-cinnamon-roll.jpg"        
    },
    "Raisin": {
        "glazing": "Sugar Milk",
        "glazingPrice": 0,
        "packSize": 3, 
        "packPrice": 3,
        "basePrice": 2.99,
        "url": "../assets/products/raisin-cinnamon-roll.jpg"
    },
    "Apple": {
        "glazing": "Original",
        "glazingPrice": 0,
        "packSize": 3, 
        "packPrice": 3,
        "basePrice": 3.49,
        "url": "../assets/products/apple-cinnamon-roll.jpg"
    }  
};

// Roll constructor 
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice, rollURL) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.price = rollPrice;
        this.url = rollURL;
    }
}

// Construct new roll and push to cart
function newRoll (rollType, rollGlaze, packSize, rollPrice, rollURL) {
    const newRoll = new Roll(rollType, rollGlaze, packSize, rollPrice, rollURL);

    finalCart.push(newRoll); // Adding roll to cart array

    updateCartTotal(newRoll); // Update cart total when new roll is added
}

// Update product price based on base price, glazing selection and pack price 
function updateProductPrice (basePrice, glazingPrice, packPrice) { 
    let updatedPrice = (basePrice + glazingPrice) * packPrice;
    return updatedPrice.toFixed(2);
}

// Clone product container 
function createElement(product) {
    // Make a clone of the product details template
    const template = document.querySelector('.image-details');
    const clone = template.content.cloneNode(true);
    
    // Connect this clone to our product.element
    product.element = clone.querySelector('.cart-clone');
  
    const removeBtn = product.element.querySelector('.remove');
    removeBtn.addEventListener('click', () => {
    deleteProduct(product); // NEED TO WRITE
    });
    
    const productListElement = document.querySelector('.full-details'); // Add product clone into DOM
    productListElement.append(product.element); // Find product parent (#full-details) and add product as its child
    
    updateElement(product); // Populate the product clone with the actual product content
}

function updateElement(product) {
    // Get the HTML elements that need updating
    const productTitleElement = product.element.querySelector('.product-title');
    const productImageElement = product.element.querySelector('.cart-image');
    const productGlazingElement = product.element.querySelector('.glazing-type');
    const productPackElement = product.element.querySelector('.pack-size');
    const productPriceElement = product.element.querySelector('.item-price');    
    
    // Copy our product content over to the corresponding HTML elements
    productTitleElement.innerText = product.type + ' Cinnamon Roll';
    productImageElement.src = product.url;
    productGlazingElement.innerText = 'Glazing: ' + product.glazing;
    productPackElement.innerText = 'Pack Size: ' + product.size;
    productPriceElement.innerText = '$' + product.price;
}

// Delete product from list
function deleteProduct(product) {
    product.element.remove(); // Remove the product DOM object from the UI
    const index = finalCart.indexOf(product);

    // Dropping product from cart array
    if (index > -1) {
        finalCart.splice(index, 1); // Remove the product object from finalCart
    }

    console.log("New array after remove: ")
    console.log(finalCart);

    updateCartTotal(product); // Update cart total when product is removed 
}

// Update cart total price
function updateCartTotal(product) {
    const cartTotalElement = document.querySelector('#cart-total-price');
    let total = 0;
    finalCart.forEach(product => {
        total += parseFloat(product.price);
    });
    cartTotalElement.textContent = '$' + total; // Update the displayed total
}

// Loop through cinnamonRolls object and construct a new roll every time 
for (const roll in cinnamonRolls) {
    let rollDetails = cinnamonRolls[roll];
    let calculatedPrice = updateProductPrice(rollDetails.basePrice, rollDetails.glazingPrice, rollDetails.packPrice);
    const product = newRoll(roll, rollDetails.glazing, rollDetails.packSize, calculatedPrice, rollDetails.url);
}

for (roll in finalCart) {
    const product = finalCart[roll];
    createElement(product);
}

console.log('Initial cart array: '); 
console.log(finalCart);