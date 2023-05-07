// set the stock number dynamically
var stockNumber = 50; // replace with your actual stock number
var stockElement = document.querySelector('.stock');
if (stockNumber > 0) {
    stockElement.textContent = 'In stock: ' + stockNumber;
} else {
    stockElement.classList.add('out-of-stock');
    stockElement.textContent = 'Out of stock';
}

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}


