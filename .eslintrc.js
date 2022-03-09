module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "semi": ["error", "never"],
        "quotes": ["off", "single"],
        "prettier/prettier": ["off", {
            "endOfLine":"auto"
        }],
        "react/react-in-jsx-scope": "off"
    }
}
