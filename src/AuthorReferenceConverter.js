'use strict';

/*
 * XML converter for AuthorReferences
 */
module.exports = {

  type: "author-reference",
  tagName: 'author',

  import: function(el, node) {
    node.target = el.attr('orcid');
  },

  export: function(node, el) {
    el.attr({
      orcid: node.target
    });
  }

};
