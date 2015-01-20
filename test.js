var expect = require("expect.js");
var address = require("address");
require.cache[require.resolve("address")].exports = {
  ip: function(){
    return "5.55.125.225"
  }
};
var time = (new Date()).getTime()
var rid  = require("./");
var to64 = require('./to64');

var base = rid().split('-');
base.pop()
base = base.join('-');
describe("base", function(){
  it('should contain ip', function(){
    expect(base.search('-AFA3B9Dh-')).to.be.above(-1);
  })
  it('should contain pid', function(){
    expect(base.search(to64(process.pid))).to.be.above(-1);
  })
  it('should contain time', function(){
    expect(base.search(to64(time).replace(/..$/,''))).to.be.above(-1);
  })
})
