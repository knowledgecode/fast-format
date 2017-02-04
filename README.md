# fast-format
[![Circle CI](https://circleci.com/gh/knowledgecode/fast-format.svg?style=shield)](https://circleci.com/gh/knowledgecode/fast-format)

This is a string formatter like `util.format()` method in Node.js, supports just only `%s` placeholder but accordingly faster than that. It will be one of the best solution if need a speed rather than complex formatting.

## Usage
Same as `util.format()` method.
```js
format(formatString[, ...])
```

If use one formatting repeatedly, recommended to compile the `formatString` in advance.
```js
format.compile(formatString)
```

## Example
```js
let s = format('%s, %s!', 'Hello', 'world');
console.log(s);     // => 'Hello, world!'
```
```js
let f = format.compile('%s, %s!');
let s1 = f('Hello', 'world');
console.log(s1);    // => 'Hello, world!'
let s2 = f('Howdy', 'World');
console.log(s2);    // => 'Howdy, World!'
```

## Benchmark
```js
// Bench 1
let s = Date.now();
for (let i = 0, len = 100000000; i < len; i++) {
    format('i = %s, len = %s', i, len);
}
console.log(Date.now() - s);
```
```js
// Bench 2
let s = Date.now();
let f = format.compile('i = %s, len = %s');
for (let i = 0, len = 100000000; i < len; i++) {
    f(i, len);
}
console.log(Date.now() - s);
```

*environment1: Core i7 2.2GHz + Node.js v6.9.5*

<img src="https://rawgit.com/knowledgecode/fast-format/master/img/graph1.svg">

| module      | time        | bench |
|-------------|-------------|:-----:|
| fast-format | 12,388 msec |     2 |
| fast-format | 22,039 msec |     1 |
| util.format | 28,659 msec |     1 |

---
*environment2: Core i7 2.2GHz + Google Chrome 56.0.2924.87*

<img src="https://rawgit.com/knowledgecode/fast-format/master/img/graph2.svg">

| module      | time        | bench |
|-------------|-------------|:-----:|
| fast-format | 12,898 msec |     2 |
| fast-format | 22,705 msec |     1 |
| util.format | 99,103 msec |     1 |

The `util.format()` method was converted with `Browserify` to run on the browser.

## Installation
### via npm
```sh
npm install fast-format --save
```

### via Bower
```sh
bower install fast-format
```

### directly (in case of the browser)
``` html
<script src="/path/to/fast-format.min.js"></script>
```

## Browser Support
Google Chrome, Firefox, Safari, Opera, Microsoft Edge and IE 6+

## License
MIT
