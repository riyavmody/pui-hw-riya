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
    const basePrice = 2.49;
    const glazeChangePrice = parseFloat(glazeOption.value);
    const packChangePrice = parseFloat(sizeOption.value);

    const newPrice = (basePrice + glazeChangePrice) * packChangePrice;
    const newPriceText = `$${newPrice.toFixed(2)}`;

    const priceText = document.getElementById('total-price'); // Price as text with dollar sign
    priceText.textContent = newPriceText;
}

//------------------- Function calls -------------------//

populateGlaze(); // Creates glaze options
populatePrice(); // Creates pack size options

glazeOption.addEventListener("change", updatePrice());
sizeOption.addEventListener("change", updatePrice());