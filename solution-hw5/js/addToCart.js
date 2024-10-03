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
        "basePrice": 2.49
    },
    "Walnut": {
        "glazing": "Vanilla Milk",
        "glazingPrice": .5,
        "packSize": 12,
        "packPrice": 10,
        "basePrice": 3.49
    },
    "Raisin": {
        "glazing": "Sugar Milk",
        "glazingPrice": 0,
        "packSize": 3, 
        "packPrice": 3,
        "basePrice": 2.99
    },
    "Apple": {
        "glazing": "Original",
        "glazingPrice": 0,
        "packSize": 3, 
        "packPrice": 3,
        "basePrice": 3.49
    }  
};

// Roll constructor 
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.price = rollPrice;
    }
}

// Construct new roll and push to cart
function newRoll (rollType, rollGlaze, packSize, rollPrice) {
    const newRoll = new Roll(rollType, rollGlaze, packSize, rollPrice);
    finalCart.push(newRoll);
}

// Update product price based on base price, glazing selection and pack price 
function updateProductPrice (basePrice, glazingPrice, packPrice) { 
    let updatedPrice = (basePrice + glazingPrice) * packPrice;
    return updatedPrice.toFixed(2);
}

// Loop through cinnamonRolls object and construct a new roll every time 
for (const roll in cinnamonRolls) {
    rollDetails = cinnamonRolls[roll];
    let calculatedPrice = updateProductPrice(rollDetails.basePrice, rollDetails.glazingPrice, rollDetails.packPrice);
    newRoll(roll, rollDetails.glazing, rollDetails.packSize, calculatedPrice);
}

console.log(finalCart);






