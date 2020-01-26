const path = require('path');

module.exports = {
    extends: [
        'tslint-config-prettier',
        'tslint-angular'
    ],
    rulesDirectory: [
        path.join(path.dirname(require.resolve('codelyzer')), './'),
        path.join(path.dirname(require.resolve('tslint-plugin-prettier')), './'),
    ],
    rules: {
        prettier: [
            true,
            {
                'singleQuote': true,
                'tabWidth': 4,
                'trailingComma': 'es5'
            }
        ],
        'no-inferrable-types': false
    }
};
