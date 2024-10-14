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

let currentRoll;

document.addEventListener('DOMContentLoaded', () => {
    // Defining URL parameters to index the current roll type
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const rollType = params.get('roll');

    if (rollType && rolls[rollType]) {
        currentRoll = rolls[rollType];
        currentRoll.type = rollType;

        // Getting HTML elements 
        const detailImage = document.getElementById('detail-image');
        const productTitle = document.querySelector('#intro p');

        // Changing HTML elements (image, text)
        if (detailImage) {
            detailImage.src = currentRoll.imageFile;
            detailImage.alt = currentRoll.altText;
        }

        if (productTitle) {
            productTitle.textContent = rollType + ' cinnamon roll';
        }
    }
});