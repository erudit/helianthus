'use strict';

var Document = require('substance/model/Document');
var ArticleSchema = require('./ArticleSchema');

var Article = function() {
  Document.call(this, new ArticleSchema());

  this.create({
    type: 'container',
    id: 'body',
    nodes: []
  });
};

Article.Prototype = function() {

  // var _super = Article.super.prototype;

  // this.delete = function(id) {
  //   if (id === 'body') {
  //     throw "DON'T";
  //   }
  //   return _super.delete.apply(this, arguments);
  // };

};

Document.extend(Article);

module.exports = Article;