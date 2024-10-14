//------------------- INITIALIZING VARS -------------------//

const glazeOption = document.getElementById('glaze'); // Glaze select element
const sizeOption = document.getElementById('size'); // Price select element

// Glaze option dictionary 
const glazeOptionList = {
    'Keep original': 0,
    'Sugar milk': 0,
    'Vanilla milk': .5,
    'Double chocolate': 1.5 
}

// Pack size option dictionary
const packSizeList = {
    '1': 1,
    '3': 3,
    '6': 5,
    '12': 10 
}

// Defining roll dictionary with relevant roll attributes  
const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "../assets/products/original-cinnamon-roll.jpg", 
        "altText": "Original cinnamon roll"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "../assets/products/apple-cinnamon-roll.jpg", 
        "altText": "Apple cinnamon roll"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "../assets/products/raisin-cinnamon-roll.jpg", 
        "altText": "Raisin cinnamon roll"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "../assets/products/walnut-cinnamon-roll.jpg", 
        "altText": "Walnut cinnamon roll"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "../assets/products/double-chocolate-cinnamon-roll.jpg", 
        "altText": "Double-Chocolate cinnamon roll"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "../assets/products/strawberry-cinnamon-roll.jpg", 
        "altText": "Strawberry cinnamon roll"
    }    
};

// Defining URL parameters to index the current roll type
const queryString = window.location.search; // Getting current URL
const params = new URLSearchParams(queryString);
const rollType = params.get('roll'); // Getting current roll name from URL

// Getting HTML elements 
const detailImage = document.getElementById('detail-image'); // Get image src
const productTitle = document.querySelector('#intro'); // Get page title  

// Changing HTML elements (image, text)
const currentRoll = rolls[rollType]; // Get current roll as object

// // Roll constructor
// class Roll {
//     constructor(rollType, rollGlazing, packSize, basePrice) {
//         this.type = rollType;
//         this.glazing =  rollGlazing;
//         this.size = packSize;
//         this.basePrice = basePrice;
//     }
// }

// Initializing cart array 
const cart = [];

// Getting select elements 
const glazeOptionSelect = document.getElementById('glaze'); // Glaze select element
const sizeOptionSelect = document.getElementById('size'); // Price select element

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
class RollCart {
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
    const newRoll = new RollCart(rollType, rollGlaze, packSize, rollPrice, rollURL);

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
    cartTotalElement.textContent = '$' + total.toFixed(2); // Update the displayed total
}



//------------------- FUNCTIONS -------------------//

// SELECT OPTIONS FUNCTIONS // 

// Dynamically populating glaze option values    
// Source: https://stackoverflow.com/questions/46572406/appending-text-and-value-when-creating-newoption-with-javascript
function populateGlaze () {
    for (let glaze in glazeOptionList) {
        const option = document.createElement('option'); // Creating option element
        option.text = glaze; // Adding the glazing options
        option.value = glazeOptionList[glaze]; // Adding the price values 
        glazeOption.appendChild(option); // Adding the option as a child of the select element
    }
}

// Dynamically populating pack option values    
function populatePrice () {
    for (let size in packSizeList) {
        const options = document.createElement('option'); // Creating option element
        options.text = size; // Adding the pack size options
        options.value = packSizeList[size]; // Adding the price values 
        sizeOption.appendChild(options); // Adding the option as a child of the select element
    }
}


// PRICE ADJUSTMENT FUNCTION // 

// Adjust price based on user selections
function updatePrice () {
    // Assigning in vars 
    const basePrice = currentRoll.basePrice;
    const glazeChangePrice = parseFloat(glazeOption.value);
    const packChangePrice = parseFloat(sizeOption.value);

    const newPrice = (basePrice + glazeChangePrice) * packChangePrice;
    const newPriceText = `$${newPrice.toFixed(2)}`;

    const priceText = document.getElementById('total-price'); // Price as text with dollar sign
    priceText.textContent = newPriceText;
}

// Calls constructor and adding it to cart array 
function addToCart () {
    const newCartProduct = new RollCart(
        rollType, // rollType
        glazeOptionSelect.options[glazeOptionSelect.selectedIndex].text, // rollGlazing Source: https://www.geeksforgeeks.org/how-to-get-selected-value-in-dropdown-list-using-javascript/ 
        sizeOptionSelect.options[sizeOptionSelect.selectedIndex].text, // packSize
        currentRoll.basePrice// basePrice
    ) 
    cart.push(newCartProduct); // Adding new object to cart
    console.log(cart); // Printing cart array
}