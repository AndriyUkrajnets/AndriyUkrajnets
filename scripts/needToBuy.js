var sum = 0;

for (var i = 0; i < products.length; i++) {
    var product = products[i];
    if (needToBuy(product.name)) {
        sum += product.price;
    }
}

// Calculate budget (ES5)
var sum = products.filter(function (product) {
    return needToBuy(product.name);
}).reduce(function (sum, product) {
    return sum + product.price;
}, 0);

// Calculate budget (ES6)
var sum =
    products
    .filter(product => needToBuy(product.name))
    .reduce((sum, product) => sum + product.price, 0);

// ES5
Market.prototype.getBudget = function (productNames) {
    var self = this; // Ugh...
    return productNames.reduce(function (sum, productName) {
        return sum + self.getPrice(productName);
    }, 0);
};

// ES6
Market.prototype.getBudget = function (productNames) {
    return productNames.reduce((sum, productName) => {
        return sum + this.getPrice(productName);
    }, 0);
};
