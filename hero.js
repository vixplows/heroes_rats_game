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
  if (food.poisonous === true) {
    this.health -= food.poisonValue;
  } else if (food.name === this.favouriteFood) {
      return this.health += (food.replenishmentValue * 1.015);
  } else { 
      return this.health += food.replenishmentValue;
  }
}

Hero.prototype.talk = function(){
  return "My name is " + this.name;
}

Hero.prototype.sortTasks = function(sortby, order){
  return _.orderBy(this.taskCollection, [sortby], [order]);
}

Hero.prototype.viewCompletedOrIncompleteTasks = function(searchfor){
  if (searchfor !== "completed" || searchfor !=="incomplete") {
    return "enter incomplete or completed?";
  }

  if (searchfor === "completed") {
      return _.filter(this.taskCollection, function(task){
          return task.completed;
      });
  } else if (searchfor === "incomplete") {
      return _.filter(this.taskCollection, function(task){
        return !task.completed;
      });
}

module.exports = Hero;