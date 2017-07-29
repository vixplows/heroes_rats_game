var Food = function(name, replenishmentValue) {
  this.name = name;
  this.replenishmentValue = replenishmentValue;
  this.poisonous = false
}

Food.prototype.makePoisonous = function(){
  this.poisonous = true;
}

module.exports = Food;