var assert = require('assert');
var Task = require('../task');

describe("Task", function(){
  var task;

  beforeEach(function(){
    task = new Task("rescue a dog", 10, 10, 50);
  });

  it("should have a name", function(){
    assert.strictEqual(task.name, "rescue a dog");
  })

  it("should have a difficulty level", function(){
    assert.strictEqual(task.difficultyLevel, 10);
  })

  it("should have an urgency level", function(){
    assert.strictEqual(task.urgencyLevel, 10);
  })

  it("should have a reward value", function(){
    assert.strictEqual(task.rewardValue, 50);
  })

  it("should start not completed", function(){
    assert.strictEqual(task.completed, false);
  })

  it("should be be able to be marked as completed", function(){
    task.markCompleted();
    assert.strictEqual(task.completed, true);
  })

})