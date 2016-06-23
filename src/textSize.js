var textSize = (function() {
  var Canvas = document.createElement('canvas');
  var Span = document.createElement("span");
  Span.style.position = 'fixed';
  Span.style.visibility = 'hidden';

  var isSpanAlreadyInDom = false;

  var DEFAULT_FONT_SIZE = 15;
  var DEFAULT_FONT_NAME = 'Arial';
  var CANVAS = 'canvas';
  var DOM = 'dom';

  function getTextWidthBasedOnCanvas(text, font) {
    if (!Canvas || !Canvas.getContext) {
      console.error('Sorry your browser does not support canvas');
      return -1;
    }

    var ctx = Canvas.getContext('2d');

    if (!ctx || !ctx.font || !ctx.measureText) {
      console.error('Sorry your browser does not support measureText method');
      return -1;
    }

    ctx.font = font;
    var textParams = ctx.measureText(text);
    return textParams && textParams.width;
  }

  function getTextWidthBasedOnDom(text, font) {
    if (!document || !document.body) {
      console.error('Sorry DOM not ready');
      return 0;
    } else if (!isSpanAlreadyInDom) {
      document.body.appendChild(Span);
      isSpanAlreadyInDom = true;
    }

    Span.textContent = text;
    Span.style.font = font;
    Span.innerText = text;

    if (!Span.getBoundingClientRect) {
      console.error('Sorry your browser does not support getBoundingClientRect method');
    }

    var width = Span.getBoundingClientRect().width;
    return width;
  }

  var utils = {
    getAvailableTypes: function() {
      return [CANVAS, DOM];
    },
    getTextWidth: function(config, type) {
      if (!config.text) {
        return 0;
      }
      if (!config.fontSize) {
        console.error('You missed fontSize in config');
      }
      if (!config.fontName) {
        console.error('You missed fontName in config');
      }
      var font = (config.fontSize || DEFAULT_FONT_SIZE) + 'px ' + (config.fontName || DEFAULT_FONT_NAME);
      return type === 'canvas'
        ? getTextWidthBasedOnCanvas(config.text, font)
        : getTextWidthBasedOnDom(config.text, font);
    }
  };

  return utils;
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = textSize;
}
