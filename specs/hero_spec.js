var assert = require('assert');
var Hero = require('../hero');

describe("Hero", function(){
  var hero;

  beforeEach(function(){
    hero = new Hero("Beveridge", 100, "Curry");
  });

  it("should have a name", function(){
    assert.strictEqual(hero.name, "Beveridge");
  })

  it("should have a health value", function(){
    assert.strictEqual(hero.health, 100);
  })

  it("should have a favourite food", function(){
    assert.strictEqual(hero.favouriteFood, "Curry");
  })

  it("should start with a reward total of zero", function(){
    assert.strictEqual(hero.rewardTotal, 0);
  })

  xit("should start with an empty task collection", function(){
    assert.strictEqual(hero.taskCollection.length, 0)
  })

})