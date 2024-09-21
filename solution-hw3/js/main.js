// Initializing vars
const glazeOption = document.getElementById('glaze'); // Glaze select element
const sizeOption = document.getElementById('size'); // Price select element

// Glaze option dictionary 
let glazeOptionList = {
    'Keep original': 0,
    'Sugar milk': 0,
    'Vanilla milk': .5,
    'Double chocolate': 1.5 
}

// Pack size option dictionary
let packSizeList = {
    '1': 1,
    '3': 3,
    '6': 5,
    '12': 10 
}

// Dynamically populating glaze option values    
// Source: https://stackoverflow.com/questions/46572406/appending-text-and-value-when-creating-newoption-with-javascript
function populateGlaze () {
    for (let glaze in glazeOptionList) {
        const option = document.createElement('option');
        option.text = glaze;
        option.value = glazeOptionList[glaze];
        glazeOption.appendChild(option);
    }
}

populateGlaze();

// Dynamically populating price option values    
// Source: https://stackoverflow.com/questions/46572406/appending-text-and-value-when-creating-newoption-with-javascript
function populatePrice () {
    for (let price in packSizeList) {
        const options = document.createElement('option');
        options.text = price;
        options.value = packSizeList[price];
        sizeOption.appendChild(options);
    }
}

populatePrice();
