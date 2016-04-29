var jQuery = require('jquery');

var DocumentSession = require('substance/model/DocumentSession');
var Component = require('substance/ui/Component');
var HelianthusWriter = require('../src/HelianthusWriter');

function _loadXML(path) {
  jQuery.ajax(path, {
    dataType: 'text'
  })
  .done(function(data){
    var ArticleImporter = require('../src/ArticleImporter');
    var importer = new ArticleImporter();
    var doc = importer.importDocument(data);

    var documentSession = new DocumentSession(doc);
    
    // For debugging in the console
    window.doc = doc;
    Component.mount(HelianthusWriter, {
      documentSession: documentSession
    }, document.body);

  }.bind(this))
  .fail(function(xhr, status, err) {
    console.error(err);
  });
}

window.onload = function() {
  _loadXML('data/sample.xml');
};