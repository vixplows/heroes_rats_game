var assert = require('assert');
var Rat = require('../rat');
var Food = require('../food');

describe("Rat", function(){
  var rat;

  beforeEach(function(){
    rat = new Rat("Maggie", 4);
  });

  it("should have a name", function(){
    assert.strictEqual(rat.name, "Maggie");
  })



})