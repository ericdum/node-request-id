var Benchmark = require('benchmark');
var rid       = require('./');

var suite = new Benchmark.Suite;

var i = 0;
suite.add('#a', function(){
  rid();
})
.on('complete', function() {
  console.log(this.join("\n"))
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: false });
