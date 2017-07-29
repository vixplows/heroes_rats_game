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
    };
}

Hero.prototype.talk = function(){
  return "My name is " + this.name;
}
  
Hero.prototype.sortTasksByLeastDifficult = function(){
  return _.orderBy(this.taskCollection, ['difficultyLevel'], ['asc']);
}

Hero.prototype.sortTasksByMostUrgent = function(){
  return _.orderBy(this.taskCollection, ['urgencyLevel'], ['desc']);
}

Hero.prototype.sortTasksByGreatestReward = function(){
  return _.orderBy(this.taskCollection, ['rewardValue'], ['desc']);
}

Hero.prototype.sortTasks = function(sortby, order){
  return _.orderBy(this.taskCollection, [sortby], [order]);
}

module.exports = Hero;