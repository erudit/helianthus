'use strict';

var AnnotationCommand = require('substance/ui/AnnotationCommand');

function AuthorReferenceCommand() {
  AuthorReferenceCommand.super.apply(this, arguments);
}

AnnotationCommand.extend(AuthorReferenceCommand);

AuthorReferenceCommand.static.name = 'author-reference';
AuthorReferenceCommand.static.annotationType = 'author-reference';

module.exports = AuthorReferenceCommand;