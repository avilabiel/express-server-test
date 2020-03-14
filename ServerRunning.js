class ServerRunning {

  check(req, res, next) {
    return res.send({ status: 'success', msg: 'Server running!' })
  }
}

module.exports = new ServerRunning