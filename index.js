
var exec = require('child_process').exec;
var ifconfigParse = require('ifconfig-parser').parse;

function getConfig(callback) {
  exec('ifconfig', function(err, stdout, stderr) {
    if (err) {
      return callback(err);
    } else {
      callback(null, ifconfigParse(stdout));
    }
  });
}

getConfig(function(err, config) {
  console.log(config);
});
