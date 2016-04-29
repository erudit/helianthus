var jQuery = require('jquery');

var DocumentSession = require('substance/model/DocumentSession');
var Component = require('substance/ui/Component');
var HelianthusWriter = require('../src/HelianthusWriter');
// var NoteImporter = require('../converter/ArticleImporter');
// var importer = new NoteImporter();

function _loadXML(path) {
  jQuery.ajax(path, {
    dataType: 'text'
  })
  .done(function(data){
    var Article = require('../src/Article');
    var doc = new Article();
    doc.create({
      id: 'p1',
      type: 'paragraph',
      content: 'Hello world'
    });
    doc.get('body').show('p1');

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


