var assert = require('assert');
var Rat = require('../rat');
var Food = require('../food');

describe("Rat", function(){
  var rat;
  var food;

  beforeEach(function(){
    rat = new Rat("Maggie", 4);
    food = new Food("curry", 50);
  });

  it("should have a name", function(){
    assert.strictEqual(rat.name, "Maggie");
  });

  it("should have a poison value", function(){
    assert.strictEqual(rat.poisonValue, 4);
  });

  it("should touch food", function(){
    rat.touchFood(food);
    assert.strictEqual(food.poisonous, true);
  })

})