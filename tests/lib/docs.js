/**
 * @fileoverview Tests docs.
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var assert = require("chai").assert,
    docs = require("../../lib/docs");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("docs", function() {
    describe("get()", function() {
        it("should return the body of a given rule's documentation", function() {
            var doc = docs.get("complexity");
            assert.isString(doc);
            assert.match(doc, /# Limit Cyclomatic Complexity/);
        });
    });
});
