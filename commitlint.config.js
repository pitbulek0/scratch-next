/** @type {import('@commitlint/types').UserConfig} */
export default {
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
        "config-eslint",
        "config-ts",

        // Add packages here:
      ],
    ],
  },
};
