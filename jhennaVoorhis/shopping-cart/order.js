function Order (description, count, price) {
  this.description = description;
  this.count = count;
  this.price = price;
  this.id = Math.floor(Math.random() * 1000000000);
}

Order.prototype.cost = function () {
  return this.count * this.price;
};

module.exports = Order;