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
detailImage.src = currentRoll.imageFile; // Changing image source based on current URL
detailImage.alt = currentRoll.altText; // Changing image alt text based on current URL
productTitle.textContent = rollType + ' cinnamon roll'; // Changing product title based on current URL 

// Roll constructor
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

// Initializing cart array 
const cart = [];

// Getting select elements 
const glazeOptionSelect = document.getElementById('glaze'); // Glaze select element
const sizeOptionSelect = document.getElementById('size'); // Price select element

// Calls constructor and adding it to cart array 
function addToCart () {
    const newCartProduct = new Roll(
        rollType, // rollType
        glazeOptionSelect.options[glazeOptionSelect.selectedIndex].text, // rollGlazing Source: https://www.geeksforgeeks.org/how-to-get-selected-value-in-dropdown-list-using-javascript/ 
        sizeOptionSelect.options[sizeOptionSelect.selectedIndex].text, // packSize
        currentRoll.basePrice// basePrice
    ) 
    cart.push(newCartProduct);
    console.log(cart);
}

// Calling addToCart function when add to cart button click  
document.getElementById('add-cart').addEventListener("click", addToCart);
