# extract-unicode

Extract all unicode codepoints for a given symbol. Useful for custom emoji libraries like Twemoji.

## Usage
```js
const ExtractUnicode = require("extract-unicode") // CommonJS
import ExtractUnicode from "extract-uncide" // ES6 & Typescript

ExtractUnicode("👨‍🦰") // [ '1f468', '200d', '1f9b0' ]
```