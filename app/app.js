var jQuery = require('jquery');

function _loadXML(path) {
  jQuery.ajax(path, {
    dataType: 'text'
  })
  .done(function(data){
    var ArticleImporter = require('../src/ArticleImporter');
    var importer = new ArticleImporter();
    var doc = importer.importDocument(data);
    debugger;
  }.bind(this))
  .fail(function(xhr, status, err) {
    console.error(err);
  });
}

window.onload = function() {
  _loadXML('data/sample.xml');
};