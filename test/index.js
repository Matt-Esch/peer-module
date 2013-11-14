var test = require("tape")

var peerModule = require("../index")

test("peerModule is a function", function (assert) {
    assert.equal(typeof peerModule, "function")
    assert.end()
})
