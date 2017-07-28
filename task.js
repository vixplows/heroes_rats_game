var _ = require('lodash');

var Task = function(name, difficultyLevel, urgencyLevel, rewardValue) {
  this.name = name;
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.rewardValue = rewardValue;
  this.completed = false;
}


module.exports = Task;