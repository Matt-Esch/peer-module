var path = require("path")

module.exports = peerModule


function peerModule(opts) {
    var base = "../" || opts.peerDirectory

    return function (name) {
        return require(path.join(base, name))
    }
}
