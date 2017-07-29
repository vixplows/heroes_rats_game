var Rat = function(name, poisonValue) {
  this.name = name;
  this.poisonValue = poisonValue;
}

Rat.prototype.touchFood = function(food) {
  food.makePoisonous();
  food.poisonValue = rat.poisonValue;
}

module.exports = Rat;