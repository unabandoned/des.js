// Vendored from minimalistic-assert@1.0.1 (MIT, Fedor Indutny), last released
// 2018. Ten lines, and forking this package would otherwise promote it from a
// transitive dependency to a direct one, where Renovate flags it.
//
// Copied verbatim but for this header. Note `assert.equal` compares loosely,
// as upstream does - the call sites compare lengths and byte values, so the
// coercion never comes into play, but tightening it would be a behaviour
// change rather than a cleanup.

module.exports = assert;

function assert(val, msg) {
  if (!val)
    throw new Error(msg || 'Assertion failed');
}

assert.equal = function assertEqual(l, r, msg) {
  if (l != r)
    throw new Error(msg || ('Assertion failed: ' + l + ' != ' + r));
};
