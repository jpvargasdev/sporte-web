module.exports = {
  extends: [
    "airbnb",
    "prettier"
  ],
  plugins: [
    "prettier"
  ],
  rules: {
    "prettier/prettier": ["error", {}, {
      "usePrettierrc": false
    }],
    "arrow-body-style" : "warn",
    "indent": ["error", 2],
    "quotes": ["error", "double"],
    "no-alert": 0,
    "class-methods-use-this": ["error",
      { "exceptMethods": [
        "render", 
        "componentDidMount", 
        "componentWillReceiveProps",
        "componentShouldUpdate"
        ]
      }],
    "comma-dangle": ["error", {
      "arrays": "only-multiline",
      "objects": "only-multiline",
      "imports": "only-multiline",
      "exports": "only-multiline",
      "functions": "only-multiline",
    }],
    "import/no-unresolved": [
      2,
      { "ignore": ["^@"] }
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
};