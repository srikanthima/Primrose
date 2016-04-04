module.exports = {
  pattern: /^\/logger\/?$/,
  POST: function (params, sendData, serverError, body) {
    var func = console[body.name];
    if (func) {
      func.apply(console, body.args);
    }
    else {
      console.log(body);
    }
    sendData("text/plain");
  }
};