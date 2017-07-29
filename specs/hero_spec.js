var assert = require('assert');
var Hero = require('../hero');
var Task = require('../task');
var Food = require('../food');
var Rat = require('../rat');

describe("Hero", function(){
  var hero;
  var task;
  var food;
  var rat;

  beforeEach(function(){
    hero = new Hero("Beveridge", 100, "curry");
    task1 = new Task("rescue a dog", 5, 1, 35);
    task2 = new Task("save city's poor", 8, 3, 20);
    task3 = new Task("create national health service", 10, 2, 50);
    food1 = new Food("pizza", 50);
    food2 = new Food("curry", 10);
    rat = new Rat("Maggie", 4);
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
    assert.strictEqual(hero.health, 110.15);
  });

  xit("should eat poisonous food and lose health", function(){
    rat.touchFood(food2);
    hero.eatFood(food2);
    assert.strictEqual(hero.health, 96);
  })

  it("should be able to sort tasks by difficulty, urgency or reward and in ascending or descending order", function(){
    hero.addTask(task3);
    hero.addTask(task1);
    hero.addTask(task2);
    // by difficulty ascending (least difficult)
    assert.deepEqual(hero.sortTasks("difficultyLevel", "asc"), 
      [
        {"name": "rescue a dog", "difficultyLevel": 5, "urgencyLevel": 1, "rewardValue": 35, "completed": false}, 
        {"name": "save city's poor", "difficultyLevel": 8, "urgencyLevel": 3, "rewardValue": 20, "completed": false}, 
        {"name": "create national health service", "difficultyLevel": 10, "urgencyLevel": 2, "rewardValue": 50, "completed": false}
      ]);
    // by urgency descending (most urgent)
    assert.deepEqual( hero.sortTasks("urgencyLevel", "desc"), 
      [
        {"name": "save city's poor", "difficultyLevel": 8, "urgencyLevel": 3, "rewardValue": 20, "completed": false}, 
        {"name": "create national health service", "difficultyLevel": 10, "urgencyLevel": 2, "rewardValue": 50, "completed": false}, 
        {"name": "rescue a dog", "difficultyLevel": 5, "urgencyLevel": 1, "rewardValue": 35, "completed": false}
      ]);
    // by reward (greatest reward)
    assert.deepEqual(hero.sortTasks("rewardValue", "desc"), 
      [
        {"name": "create national health service", "difficultyLevel": 10, "urgencyLevel": 2, "rewardValue": 50, "completed": false},
        {"name": "rescue a dog", "difficultyLevel": 5, "urgencyLevel": 1, "rewardValue": 35, "completed": false},
        {"name": "save city's poor", "difficultyLevel": 8, "urgencyLevel": 3, "rewardValue": 20, "completed": false}
      ]);
  });

  it("should be able to view tasks that are marked as completed or incomplete", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    task2.markCompleted();
    // return array of completed tasks
    assert.deepEqual(hero.viewCompletedOrIncompleteTasks("completed"),
      [ 
        {"name": "save city's poor", "difficultyLevel": 8, "urgencyLevel": 3, "rewardValue": 20, "completed": true}
      ]);
    // return array of incompleted tasks
    assert.deepEqual(hero.viewCompletedOrIncompleteTasks("incomplete"),
      [ 
        {"name": "rescue a dog", "difficultyLevel": 5, "urgencyLevel": 1, "rewardValue": 35, "completed": false},
        {"name": "create national health service", "difficultyLevel": 10, "urgencyLevel": 2, "rewardValue": 50, "completed": false}
      ]);
    assert.strictEqual(hero.viewCompletedOrIncompleteTasks("what!"), "enter incomplete or completed?")
  });

})