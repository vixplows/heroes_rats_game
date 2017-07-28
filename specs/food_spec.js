var assert = require('assert');
var Food = require('../food');

describe("Food", function(){
  var food;

  beforeEach(function(){
    food = new Food("Curry", 50);
  });

  it("should have a name", function(){
    assert.strictEqual(food.name, "Curry");
  })

  it("should have a replenishment value", function(){
    assert.strictEqual(food.replenishmentValue, 50);
  })

  xit("should start not poisonous", function(){
    assert.strictEqual(food.poisonous, false);
  })

})