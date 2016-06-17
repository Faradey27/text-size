var Canvas = document.createElement('canvas');
var Span = document.createElement("span");

var utils = {
  getTextWidthBasedOnCanvas: function(config) {
    var ctx = Canvas.getContext('2d');
    ctx.font = config.fontSize + 'px ' + config.fontName;
    return ctx.measureText(config.text).width;
  },
  getTextWidthBasedOnDom: function(config) {
    Span.textContent = config.text;
    Span.font = config.fontSize + 'px ' + config.fontName;
    document.body.appendChild(Span);
    var width = Span.getBoundingClientRect().width;
    document.body.removeChild(Span);
    return width;
  },
  getTextWidth: function(config, type) {
    return type === 'canvas'
      ? this.getTextWidthBasedOnCanvas(config)
      : this.getTextWidthBasedOnDom(config);
  }
};

module.exports = utils;
