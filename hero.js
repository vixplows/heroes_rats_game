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

// need to also add in check for if food is poisonous, if true then need to delete rat.posionValue from heros health
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

Hero.prototype.sortTasks = function(sortby, order){
  return _.orderBy(this.taskCollection, [sortby], [order]);
}

Hero.prototype.viewCompletedOrIncompleteTasks = function(searchfor){
  if (searchfor === "completed") {
    return _.filter(this.taskCollection, ["completed", true]);
  } 
    if (searchfor === "incomplete") {
      return _.filter(this.taskCollection, ["completed", false]);
    }
      else {
        return "enter incomplete or completed?"
      }  
}

module.exports = Hero;