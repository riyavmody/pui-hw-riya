//------------------- INITIALIZING VARS -------------------//

const glazeOption = document.getElementById('glaze'); // Glaze select element
const sizeOption = document.getElementById('size'); // Price select element
const priceText = document.getElementById('total-price').innerText; // Price as text with dollar sign
let totalPrice = parseFloat(priceText.replace('$', '')); // Price as float 

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


//------------------- FUNCTIONS -------------------//

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

// Adjust price for glaze 
function glazingChange(element) {
    let priceChange = parseFloat(element.value); // Grabbing the user selection as a float 
    let newPrice = totalPrice + priceChange; // Adding the price change to the base price
    console.log('glaze price change:',priceChange);
    console.log('glaze total price:',newPrice);
    return(newPrice);
}

// Adjust price for glaze 
function sizeChange(element) {
    let priceChange = parseFloat(element.value); // Grabbing the user selection as a float 
    let newPrice = glazingChange(glazeOption) * priceChange; // Multiplying the price change to the new total (including changes from glazing)
    console.log('pack price change:',priceChange);
    console.log('pack total price:',newPrice);
    return(newPrice);
}


//------------------- Function calls -------------------//

populateGlaze(); // Creates glaze options
populatePrice(); // Creates pack size options
glazingChange(glazeOption); // Updates price based on glaze options
sizeChange(sizeOption); // Updates price based on pack size options

