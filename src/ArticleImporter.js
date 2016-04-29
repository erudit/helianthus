'use strict';

var DefaultDOMElement = require('substance/ui/DefaultDOMElement');
var XMLImporter = require('substance/model/XMLImporter');
var ArticleSchema = require('./ArticleSchema');
var Article = require('./Article');

var converters = [
  require('substance/packages/paragraph/ParagraphHTMLConverter'),
  require('substance/packages/heading/HeadingHTMLConverter'),
  require('substance/packages/emphasis/EmphasisHTMLConverter'),
  require('substance/packages/strong/StrongHTMLConverter'),
  require('substance/packages/link/LinkHTMLConverter'),
];

function ArticleImporter() {
  ArticleImporter.super.call(this, {
    schema: new ArticleSchema(),
    converters: converters
  });
}

ArticleImporter.Prototype = function() {

  // TODO: consider this done in the core implementation
  this.importDocument = function(xmlString) {
    this.reset();
    var xmlDoc = DefaultDOMElement.parseXML(xmlString, 'fullDoc');
    var articleEl = xmlDoc.find('article');
    if (!articleEl) {
      throw new Error('<article> element is mandatory.');
    }
    this.convertDocument(articleEl);
    var doc = this.generateDocument();
    return doc;
  };

  this.convertDocument = function(articleEl) {
    var bodyEl = articleEl.find('body');
    var body = this.createNode({
      type: 'container',
      id: 'body',
      nodes: []
    });
    bodyEl.getChildren().forEach(function(childEl) {
      var node = this.convertElement(childEl);
      body.nodes.push(node.id);
    }.bind(this));
  };

  this._createDocument = function() {
    return new Article();
  };

};

XMLImporter.extend(ArticleImporter);

module.exports = ArticleImporter;
