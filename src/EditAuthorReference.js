'use strict';

var Component = require('substance/ui/Component');

var ORCS = [
  {id: 'orcid-john', name: 'John Doe'},
  {id: 'orcid-jane', name: 'Jane Doe'}
];

function EditAuthorReference() {
  Component.apply(this, arguments);
}

EditAuthorReference.Prototype = function() {
  this._selectAuthor = function() {
    var authorId = this.refs.selectAuthor.val();
    var node = this.props.node;
    console.log('le author id', authorId);

    // Update the author reference target
    var surface = this.context.surface;
    surface.transaction(function(tx) {
      tx.set([node.id, 'target'], authorId);
    });
    console.log(node.target);
  };

  this.render = function($$) {
    var el = $$('div').addClass('sc-edit-author-reference');
    var selectAuthor = $$('select').ref('selectAuthor').on('change', this._selectAuthor);

    el.append($$('label').append('Please select an author'));

    ORCS.forEach(function(orc) {
      selectAuthor.append(
        $$('option').attr({value: orc.id}).append(orc.name)
      );
    });

    el.append(selectAuthor);
    
    return el;
  };
};

Component.extend(EditAuthorReference);

module.exports = EditAuthorReference;