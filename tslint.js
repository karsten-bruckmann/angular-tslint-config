const path = require('path');

module.exports = {
    extends: [
        'tslint-angular',
        'rxjs-tslint-rules',
        'tslint-config-prettier',
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

        // add/override tslint rules
        'one-variable-per-declaration': [
            true,
            'ignore-for-loop'
        ],
        'max-classes-per-file': false,
        'forin': false,

        // override tslint-angular rules
        'no-inferrable-types': [
            true,
            'ignore-params',
            'ignore-properties'
        ],

        // enable rxjs-tslint-rules
        'rxjs-finnish': {
            options: [{
                functions: false,
                methods: false,
                parameters: true,
                properties: true,
                variables: true
            }],
            severity: 'warning'
        },
        'rxjs-no-exposed-subjects': { severity: 'warning' },
        'rxjs-no-subject-unsubscribe': { severity: 'warning' },
        'rxjs-no-unsafe-takeuntil': true,
        'rxjs-prefer-angular-takeuntil': { severity: 'warning' },
        'rxjs-no-compat': true,
        'rxjs-no-create': true,
        'rxjs-no-index': true,
        'rxjs-no-internal': true,
        'rxjs-no-nested-subscribe': true,
        'rxjs-no-operator': true,
        'rxjs-no-patched': true,
        'rxjs-no-subclass': true,
        'rxjs-no-unbound-methods': true,
        'rxjs-no-add': true,
        'rxjs-no-async-subscribe': true,
        'rxjs-no-deep-operators': true,
        'rxjs-no-ignored-error': { severity: 'warning' },
        'rxjs-no-ignored-observable': true,
        'rxjs-no-ignored-replay-buffer': true,
        'rxjs-prefer-angular-async-pipe': { severity: 'warning' }
    }
};


