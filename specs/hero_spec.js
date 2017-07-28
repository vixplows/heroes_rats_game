var assert = require('assert');
var Hero = require('../hero');
var Task = require('../task');
var Food = require('../food');

describe("Hero", function(){
  var hero;
  var task;

  beforeEach(function(){
    hero = new Hero("Beveridge", 100, "curry");
    task1 = new Task("rescue a dog", 5, "low", 20);
    task2 = new Task("save city's poor", 8, "med", 35);
    task3 = new Task("create national health service", 10, "high", 50);
    food1 = new Food("pizza", 50);
    food2 = new Food("curry", 10);
  });

  it("should have a name", function(){
    assert.strictEqual(hero.name, "Beveridge");
  })

  it("should have a health value", function(){
    assert.strictEqual(hero.health, 100);
  })

  it("should have a favourite food", function(){
    assert.strictEqual(hero.favouriteFood, "curry");
  })

  it("should start with a reward total of zero", function(){
    assert.strictEqual(hero.rewardTotal, 0);
  })

  it("should start with an empty task collection", function(){
    assert.strictEqual(hero.taskCollection.length, 0);
  })

  it("should add task to task collection", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    assert.strictEqual(hero.taskCollection.length, 3);
  })

  it("should be able to eat food", function(){
    hero.eatFood(food1);
    assert.strictEqual(hero.health, 150);
  })

  it("should be able to eat favourite food", function(){
    hero.eatFood(food2);
    assert.strictEqual(hero.health, 110.15)
  })

})