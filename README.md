# MC-Market's Official JS API Wrapper

[![GitHub license](https://img.shields.io/badge/license-MIT-007ec6)](https://github.com/Majored/mcm-js-api-wrapper/blob/main/LICENSE)
[![npm version](https://badge.fury.io/js/mcm-js-api-wrapper.svg)](https://www.npmjs.com/package/mcm-js-api-wrapper)
[![npm version](https://img.shields.io/badge/docs-passing-brightgreen)](https://mc-market-org.github.io/js-api-wrapper/)

An official asynchronous JavaScript (Node.js) wrapper for MC-Market's [Ultimate REST API](https://www.mc-market.org/wiki/ultimate-api/).

- Fully asynchronous design compatible with .then() notation or async/await.
- Dynamically stalls requests when a rate limit is hit.
- A comprehensive set of usage examples.
- Heavily commented making contributions painless.

## Installation & Basic Usage

Install via `npm`:

```
npm i mcm-js-api-wrapper
```

Initialise wrapper and fetch information about yourself via Promise's .then() notation:

```JS
const { Wrapper, Token, TokenType } = require("mcm-js-api-wrapper");

let token = new Token(TokenType.PRIVATE, "Find @ https://www.mc-market.org/account/api");
let wrapper = new Wrapper();

// We catch any Promise rejections ourselves.
wrapper.init(token).then(wrapper.members().self().then(self => {
    console.log(self);
})).catch(error => {
    console.log(error.toString());
});
```

Initialise wrapper and fetch information about yourself via async/await:

```JS
const { Wrapper, Token, TokenType } = require("mcm-js-api-wrapper");
...

let token = new Token(TokenType.PRIVATE, "Find @ https://www.mc-market.org/account/api");
let wrapper = new Wrapper();

// Let the caller catch any Promise rejections. Else, use a try-catch block.
await wrapper.init(token);
console.log(await wrapper.members().self());
```

A full list of functions and their signatures can be found [here](https://github.com/MC-Market-org/mcm-js-api-wrapper/blob/main/USAGE.md).

## Issues & Support

The [issues tracker](https://github.com/MC-Market-org/mcm-js-api-wrapper/issues) for this repository should only be used to report bugs or issues with this official JS wrapper.

For bugs or issues related to the Ultimate API itself, please open a [support ticket](https://www.mc-market.org/tickets/new) or create a [bug report](https://www.mc-market.org/suggestions/create-thread) on our platform.
