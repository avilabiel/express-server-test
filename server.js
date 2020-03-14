const express = require("express");
const bodyParser = require("body-parser");

class Server {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
    this.exception();

    this.express.listen(5000);
    console.log(`Server running on port 5000`);
  }

  middlewares() {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  routes() {
    this.express.use(require("./routes"));
  }

  exception() {
    this.express.use(async (err, req, res, next) => {
      let message = "Internal Server Error";

      return res.status(500).send({ message });
    });
  }
}

module.exports = new Server().express;
