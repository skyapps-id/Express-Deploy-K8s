const os = require("os");
const hostname = os.hostname();

exports.index = function (req, res) {
  res.json({
    status: "Success",
    data: "Hello",
    hostname: hostname
  });
};