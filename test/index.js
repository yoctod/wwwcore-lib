'use strict';

var should = require('chai').should();
var wwwcore = require('../');

describe('#versionGuard', function() {
  it('global._litecore should be defined', function() {
    should.equal(global._wwwcore, wwwcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      wwwcore.versionGuard('version');
    }).should.throw('More than one instance of wwwcore');
  });
});
