var startTime = (new Date()).getTime();
var ip        = require('address').ip().split('.');
var pid       = process.pid;
var to64      = require('./to64');

var prefix = to64(startTime) + '-';
for( var i in ip ) {
  c = to64(ip[i]);
  if(c.length < 2) {
    c = 'A'+c
  }
  prefix += c;
}
prefix += '-' + to64(pid) + '-';
var i = 0;

module.exports = function(){
  return prefix + to64(i++);
}
