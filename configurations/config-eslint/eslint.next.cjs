const Config = require('./eslint.base.cjs');

Config.extends.push('next/core-web-vitals');

/** @type {import('eslint').Linter.Config} */
module.exports = Config;
