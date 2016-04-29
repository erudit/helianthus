'use strict';

var Component = require('substance/ui/Component');
var Modal = require('substance/ui/Modal');
var EditAuthorReference = require('./EditAuthorReference');

function AuthorReferenceComponent() {
  Component.apply(this, arguments);

  this.handleActions({
    'closeModal': this._closeModal
  });
}

AuthorReferenceComponent.Prototype = function() {
  this._openModal = function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      edit: true
    });
  };

  this._highlight = function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      highlighted: !this.state.highlighted
    });
  };

  this._closeModal = function() {
    this.setState({
      edit: false
    });
  };

  this._stopPropagation = function(e) {
    e.stopPropagation();
  };

  this.render = function($$) {
    var el = $$('span')
      .addClass('sc-author-reference')
      .attr('data-id', this.props.node.id)
      .append(
        this.props.children
      ).on('mousedown', this._highlight);

    // Highlighted states must be set outside
    // TODO: this must come in as prop (this.props.highlighted)
    // We need new API's for highlights
    if (this.state.highlighted) {
      el.append(
        $$('div').addClass('se-actions').append(
          $$('button').append('Edit').on('mousedown', this._openModal)
        )
      );
    }

    if (this.state.edit) {
      el.append(
        $$(Modal, {
          width: 'medium'
        }).append(
          $$(EditAuthorReference, {node: this.props.node})
        ).on('mousedown', this._stopPropagation)
      );
    }
    return el;
  };
};

Component.extend(AuthorReferenceComponent);

module.exports = AuthorReferenceComponent;