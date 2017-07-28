var _ = require('lodash');

var Hero = function(name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.taskCollection = [];
  this.rewardTotal = 0;
}

Hero.prototype.addTask = function(task){
  this.taskCollection.push(task);
}

Hero.prototype.eatFood = function(food){
  if (food.name === this.favouriteFood) {
    return this.health += (food.replenishmentValue * 1.015);
  } else {
      return this.health += food.replenishmentValue;
    }
}

module.exports = Hero;