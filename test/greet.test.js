import { test } from "node:test";
import assert from "node:assert/strict";
import { greet, shout } from "../index.js";

test("greet returns a greeting", () => {
  assert.equal(greet("Ada"), "Hello, Ada!");
});

test("greet trims whitespace", () => {
  assert.equal(greet("  Grace  "), "Hello, Grace!");
});

test("greet rejects empty input", () => {
  assert.throws(() => greet(""), TypeError);
});

test("shout uppercases the greeting", () => {
  assert.equal(shout("Ada"), "HELLO, ADA!");
});
