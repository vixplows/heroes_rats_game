var assert = require('assert');
var Food = require('../food');

describe("Food", function(){
  var food;

  beforeEach(function(){
    food = new Food("curry", 50);
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

})