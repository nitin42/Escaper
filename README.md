HTML-Escaper
===================

A small library which provides methods to `escape` and `unescape` HTML entities before inserting untrusted data into HTML element content. ([XSS](https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet) prevention)

## Installation

  ```
  npm install es-en --save

  ```

## Usage
  
  ```

  var hescape = require('es-en');
  var escape = hescape.escape,
  var unescape = hescape.unescape;

  var html = '<h1>Help me!</h1>',
  var escaped = escape(html),
  var unescaped = unescape(escaped);

  console.log('html', html, 'escaped', escaped, 'unescaped', unescaped);

  ```

## Tests

  npm test

## Contributing
	
Add unit tests for any new or changed functionality.

## License

MIT
