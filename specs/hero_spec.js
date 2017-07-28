var assert = require('assert');
var Account = require('../hero');

describe("Hero", function(){
  var hero;

  beforeEach(function(){
    hero = new Hero("Beveridge", 100, "Curry");
  });