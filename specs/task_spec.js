var assert = require('assert');
var Task = require('../task');

describe("Task", function(){
  var hero;

  beforeEach(function(){
    task = new Task("rescue a dog", 10, "high", 50);
  });

  it("should have a name", function(){
    assert.strictEqual(task.name, "rescue a dog");
  })

  xit("should have a difficulty level", function(){
    assert.strictEqual(task.diffiucltyLevel, 10);
  })

  xit("should have an urgency level", function(){
    assert.strictEqual(task.urgencyLevel, "high");
  })

  xit("should have a reward value", function(){
    assert.strictEqual(taks.rewardValue, 50);
  })

  xit("should start not completed", function(){
    assert.strictEqual(task.completed, false);
  })

  xit("should be be able to be marked as completed", function(){
    task.markCompleted();
    assert.strictEqual(task.completed, true);
  })

})