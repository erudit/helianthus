'use strict';

var PropertyAnnotation = require('substance/model/PropertyAnnotation');
var Fragmenter = require('substance/model/Fragmenter');

function AuthorReference() {
  AuthorReference.super.apply(this, arguments);
}

PropertyAnnotation.extend(AuthorReference);

AuthorReference.static.name = "author-reference";

AuthorReference.static.defineSchema({
  target: { type: 'string', 'default': 'orcid-john'}
});

// in presence of overlapping annotations will try to render this as one element
AuthorReference.static.fragmentation = Fragmenter.SHOULD_NOT_SPLIT;

module.exports = AuthorReference;