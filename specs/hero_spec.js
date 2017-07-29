var assert = require('assert');
var Hero = require('../hero');
var Task = require('../task');
var Food = require('../food');

describe("Hero", function(){
  var hero;
  var task;

  beforeEach(function(){
    hero = new Hero("Beveridge", 100, "curry");
    task1 = new Task("rescue a dog", 5, 1, 35);
    task2 = new Task("save city's poor", 8, 3, 20);
    task3 = new Task("create national health service", 10, 2, 50);
    food1 = new Food("pizza", 50);
    food2 = new Food("curry", 10);
  });

  it("should have a name", function(){
    assert.strictEqual(hero.name, "Beveridge");
  });

  it("should have a health value", function(){
    assert.strictEqual(hero.health, 100);
  });

  it("should have a favourite food", function(){
    assert.strictEqual(hero.favouriteFood, "curry");
  })

  it("should be able to talk", function(){
    assert.strictEqual(hero.talk(), "My name is Beveridge")
  });

  it("should start with a reward total of zero", function(){
    assert.strictEqual(hero.rewardTotal, 0);
  });

  it("should start with an empty task collection", function(){
    assert.strictEqual(hero.taskCollection.length, 0);
  });

  it("should add task to task collection", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    assert.strictEqual(hero.taskCollection.length, 3);
  });

  it("should be able to eat food", function(){
    hero.eatFood(food1);
    assert.strictEqual(hero.health, 150);
  });

  it("should be able to eat favourite food", function(){
    hero.eatFood(food2);
    assert.strictEqual(hero.health, 110.15)
  });

  it("should be able to sort tasks by least difficult", function(){
    hero.addTask(task3);
    hero.addTask(task1);
    hero.addTask(task2);
    assert.deepEqual(hero.sortTasksByLeastDifficult(), 
      [
        {"name": "rescue a dog", "difficultyLevel": 5, "urgencyLevel": 1, "rewardValue": 35, "completed": false}, 
        {"name": "save city's poor", "difficultyLevel": 8, "urgencyLevel": 3, "rewardValue": 20, "completed": false}, 
        {"name": "create national health service", "difficultyLevel": 10, "urgencyLevel": 2, "rewardValue": 50, "completed": false}
      ]);
  });

  it("should be able to sort tasks by most urgent", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    assert.deepEqual( hero.sortTasksByMostUrgent(), 
      [
        {"name": "save city's poor", "difficultyLevel": 8, "urgencyLevel": 3, "rewardValue": 20, "completed": false}, 
        {"name": "create national health service", "difficultyLevel": 10, "urgencyLevel": 2, "rewardValue": 50, "completed": false}, 
        {"name": "rescue a dog", "difficultyLevel": 5, "urgencyLevel": 1, "rewardValue": 35, "completed": false}
      ]);
  });

  it("should be able to sort tasks by greatest reward", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    assert.deepEqual(hero.sortTasksByGreatestReward(), 
      [
        {"name": "create national health service", "difficultyLevel": 10, "urgencyLevel": 2, "rewardValue": 50, "completed": false},
        {"name": "rescue a dog", "difficultyLevel": 5, "urgencyLevel": 1, "rewardValue": 35, "completed": false},
        {"name": "save city's poor", "difficultyLevel": 8, "urgencyLevel": 3, "rewardValue": 20, "completed": false}
      ]);
  });
})