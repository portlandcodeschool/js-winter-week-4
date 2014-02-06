var shoppingCart = {
  stuff: [],
  add: function (thing) {
    this.stuff.push(thing);
    return thing;
  },
  remove: function (order, removeHowMany) {
    var i = -1;
    this.stuff.forEach(function (item, index) {
      if (item.id === order.id)
        i = index;
    });
    if (i === -1) throw new Error("Item not found in shopping cart!");
    // now this.stuff[i] is the item we want to remove

    if (this.stuff[i].count <= removeHowMany) {
      this.stuff.splice(i, 1); // remove this item from the shopping cart!
    } else {
      this.stuff[i].count -= removeHowMany;
    }
  },
  list: function () {
    var outputStr = "";
    this.stuff.forEach(function (order) {
      outputStr += order.count + ' X ' + order.description + " at " + order.price + " each.\n"
    });
    return outputStr;
  },
  total: function () {
    var sum = 0;
    this.stuff.forEach(function (order) {
      sum += order.cost();
    });
    return sum;
  }
};

module.exports = shoppingCart;