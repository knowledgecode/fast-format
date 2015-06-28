# fast-format [![Circle CI](https://circleci.com/gh/knowledgecode/fast-format.svg?style=shield)](https://circleci.com/gh/knowledgecode/fast-format)
This is a simplified version of Node.js `util.format()`. This supports only `%s` placeholder, but faster than that. This will be the best solution if you need speed rather than complex formatting.

## Usage
Same as Node.js `util.format()`.
```js
format(formatString[, ...])
```

## Example
```js
var s = format('%s, %s!', 'Hello', 'world');
console.log(s);     // => 'Hello, world!'
```

## Benchmark
```js
var i, len, s = Date.now();
for (i = 0, len = 10000000; i < len; i++) {
    format('i = %s, len = %s', i, len);
}
console.log(Date.now() - s);
```

*environment1: MacBook Air Early 2015 + Node.js v0.12.5*

<img src="https://rawgit.com/knowledgecode/fast-format/master/img/graph1.svg">

| module      | time        |
|-------------|-------------|
| fast-format |  2,072 msec |
| util.format | 11,571 msec |
| sprintf-js  | 19,438 msec |

---
*environment2: Core i7 2.5GHz Windows 8.1 Pro + Internet Explorer 11*  

<img src="https://rawgit.com/knowledgecode/fast-format/master/img/graph2.svg">

| module      | time        |
|-------------|-------------|
| fast-format | 25,302 msec |
| util.format | 40,550 msec |
| sprintf-js  | 58,133 msec |

[sprintf-js](https://github.com/alexei/sprintf.js) is a JavaScript sprintf implementation for the browser and Node.js. It is slow but might not be inevitable because a high functional module.  

## Installation
### via npm
```sh
npm install fast-format --save
```

### via bower
```sh
bower install fast-format
```

## Browser Support
Chrome, Firefox, Safari, Opera, and Internet Explorer 6+

## License
MIT

