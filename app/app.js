var jQuery = require('jQuery');

function _loadXML(path) {
  jQuery.ajax(path, {
    dataType: 'text'
  })
  .done(function(data){
    var Article = require('../src/Article');
    debugger;
  }.bind(this))
  .fail(function(xhr, status, err) {
    console.error(err);
  });
}

window.onload = function() {
  _loadXML('data/sample.xml');
};