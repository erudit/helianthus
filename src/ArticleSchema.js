'use strict';

var DocumentSchema = require('substance/model/DocumentSchema');

function ArticleSchema() {
  ArticleSchema.super.call(this, 'helianthus', '1.0.0');

  this._registerNodes();
}

ArticleSchema.Prototype = function() {

  this.getDefaultTextType = function() {
    return 'paragraph';
  };

  this._registerNodes = function() {
    this.addNodes([
      require('substance/packages/paragraph/Paragraph'),
      require('substance/packages/heading/Heading'),
      require('substance/packages/emphasis/Emphasis'),
      require('substance/packages/strong/Strong'),
      require('substance/packages/link/Link'),
      // add custom node to the schema
      require('./AuthorReference')
    ]);
  };

};

DocumentSchema.extend(ArticleSchema);


module.exports = ArticleSchema;
