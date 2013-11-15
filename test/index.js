
var token = "9rhtgbolui4yrncqowuy;y45b"

var test = require("tape")

var cpeer = require("../index")({
    peerDirectory: __dirname
})


module.exports = token



test("peerModule is a function", function (assert) {
    assert.equal(typeof cpeer, "function")
    assert.end()
})

test("require peer in current directory", function (assert) {
    assert.equal(cpeer(""), token)
    assert.end()
})

