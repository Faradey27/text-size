# text-size
Small high performance library to get text width before render

## Examples
1) With [**React**](https://github.com/facebook/react) es6 style
```js
import React from 'react';
import textSize from 'text-size';

class TextComponent extends React.Component {
  render() {
    return (
        <span>
            Text width: {textSize.getTextWidth({text: 'Some text', fontSize: 17, fontName: 'Arial'})}
        </span>
    );
  }
}
```
2) With [**React**](https://github.com/facebook/react) es5 style
```js
var React = require('react');
var textSize = require('text-size');

var TextComponent = React.createClass({
  render: function() {
    return (
        <span>
            Text width: {textSize.getTextWidth({text: 'Some text', fontSize: 17, fontName: 'Arial'})}
        </span>
    );
  }
});
```
3) With simple html file
```js
<html>
  <head>
  </head>
  <body>
    <script src="textSize.js"></script>
    <script>
      console.log(textSize.getTextWidth({text: 'Some text', fontSize: 17, fontName: 'Arial'}));
    </script>
  </body>
</html>
```
## API
#### `getTextWidth(config, type)`
- `config` - {text: String, fontSize: String, fontName: String}, required parameter
- `type`: - optional parameter, can be 'canvas' or 'dom', 'dom' by default
## Pefomance
For testing we use Macbook Pro 2015, Chrome 51
#### `DOM`
```js
<html>
  <head>
  </head>
  <body>
    <script src="textSize.js"></script>
    <script>
      var startTime = Date.now();
      for (var i = 0; i < 10000; i++) {
        textSize.getTextWidth({text: 'Some text', fontSize: 17, fontName: 'Arial'})
      }
      console.log('Time:', Date.now() - startTime);
    </script>
  </body>
</html>
````
take 35-50ms
#### `Canvas`
```js
<html>
  <head>
  </head>
  <body>
    <script src="textSize.js"></script>
    <script>
      var startTime = Date.now();
      for (var i = 0; i < 10000; i++) {
        textSize.getTextWidth({text: 'Some text', fontSize: 17, fontName: 'Arial'}, 'canvas')
      }
      console.log('Time:', Date.now() - startTime);
    </script>
  </body>
</html>
````
take 25-45ms
