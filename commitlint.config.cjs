/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  ignores: [commit => commit.includes("[skip ci]")],
  rules: {
    "scope-enum": [
      2,
      "always",
      [
        // Add apps here:
        "scratch-gui",
        
        // Add configurations here:
        "config-ts",

        // Add packages here:
      ],
    ],
  },
};
