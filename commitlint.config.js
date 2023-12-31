/** @type {import('@commitlint/types').UserConfig} */
const Config = {
  extends: ['@commitlint/config-conventional'],
  ignores: [commit => commit.includes('[skip ci]')],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        // Add apps here:
        'scratch-gui',

        // Add configurations here:
        'config-prettier',
        'config-eslint',
        'config-ts',

        // Add packages here:
      ],
    ],
  },
};

export default Config;
