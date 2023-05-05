// set the stock number dynamically
var stockNumber = 50; // replace with your actual stock number
var stockElement = document.querySelector('.stock');
if (stockNumber > 0) {
    stockElement.textContent = 'In stock: ' + stockNumber;
} else {
    stockElement.classList.add('out-of-stock');
    stockElement.textContent = 'Out of stock';
}

// set the stock number dynamically
var stockNumber = 50; // replace with your actual stock number
var stockElement = document.querySelector('.stock1');
if (stockNumber > 0) {
    stockElement.textContent = 'In stock: ' + stockNumber;
} else {
    stockElement.classList.add('out-of-stock');
    stockElement.textContent = 'Out of stock';
}

// set the stock number dynamically
var stockNumber = 50; // replace with your actual stock number
var stockElement = document.querySelector('.stock2');
if (stockNumber > 0) {
    stockElement.textContent = 'In stock: ' + stockNumber;
} else {
    stockElement.classList.add('out-of-stock');
    stockElement.textContent = 'Out of stock';
}