var Order = require('./order');
var shoppingCart = require('./shopping-cart');

var orders = [new Order("Huggies Little Snugglers Diapers", 4, 19.77),
              new Order("Tylenol Extra Strength Acetaminophen", 2, 22.38),
              new Order("Flents Quiet Please Foam Ear Plugs", 10, 11.50),
              new Order("Monsters Eat Whiny Children", 1, 11.07)];

orders.forEach(function (order) {
  shoppingCart.add(order);
});

shoppingCart.remove(orders[2], 6);
shoppingCart.remove(orders[3], 1);

console.log(shoppingCart.list());

/* Should print:
[
'4 X Huggies Little Snugglers Diapers',
'2 X Tylenol Extra Strength Acetaminophen',
'4 X Flents Quiet Please Foam Ear Plugs',
]
*/

console.log(shoppingCart.total());

// Should print: 169.84