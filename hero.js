var _ = require('lodash');

var Hero = function(name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.taskCollection = [];
  this.rewardTotal = 0;
}

module.exports = Hero;