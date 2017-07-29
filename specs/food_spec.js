var assert = require('assert');
var Food = require('../food');
var Rat = require('../rat');

describe("Food", function(){
  var food;

  beforeEach(function(){
    food = new Food("curry", 50);
    rat = new Rat("Maggie", 4);
  });

  it("should have a name", function(){
    assert.strictEqual(food.name, "curry");
  })

  it("should have a replenishment value", function(){
    assert.strictEqual(food.replenishmentValue, 50);
  })

  it("should start not poisonous", function(){
    assert.strictEqual(food.poisonous, false);
  })

  it("should be able to become poisonous", function(){
    food.makePoisonous();
    assert.strictEqual(food.poisonous, true);
  })

  it("should have poison value of zero at start", function(){
    assert.strictEqual(food.poisonValue, 0);
  })

  it("should increase poison value when touched by rat", function(){
    rat.touchFood(food);
    assert.strictEqual(food.poisonValue, 4);
  })

})