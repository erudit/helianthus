'use strict';

var SurfaceTool = require('substance/ui/SurfaceTool');

function AuthorReferenceTool() {
  AuthorReferenceTool.super.apply(this, arguments);
}
SurfaceTool.extend(AuthorReferenceTool);

AuthorReferenceTool.static.name = 'author-reference';

module.exports = AuthorReferenceTool;