//------------------- Function calls -------------------//

populateGlaze(); // Creates glaze options
populatePrice(); // Creates pack size options

glazeOption.addEventListener("change", updatePrice());
sizeOption.addEventListener("change", updatePrice());


detailImage.src = currentRoll.imageFile; // Changing image source based on current URL
detailImage.alt = currentRoll.altText; // Changing image alt text based on current URL
productTitle.textContent = rollType + ' cinnamon roll'; // Changing product title based on current URL 

// Calling addToCart function when add to cart button click  
document.getElementById('add-cart').addEventListener("click", addToCart);

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