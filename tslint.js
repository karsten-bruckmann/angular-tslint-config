const path = require('path');

module.exports = {
    extends: [
        'tslint-config-prettier',
        'tslint-angular',
        'rxjs-tslint-rules'
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

        // tslint-angular
        'no-inferrable-types': false,
        'one-variable-per-declaration': [
            true,
            'ignore-for-loop'
        ],

        // rxjs-tslint-rules
        'rxjs-finnish': {
            'options': [{
                'functions': false,
                'methods': false,
                'parameters': false,
                'properties': true,
                'variables': true
            }]
        },
        'rxjs-no-exposed-subjects': true,
        'rxjs-no-subject-unsubscribe': true,
        'rxjs-no-unsafe-takeuntil': true,
        'rxjs-prefer-angular-takeuntil': true
    }
};
