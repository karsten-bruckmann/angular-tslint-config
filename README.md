# TSLint config for Angular TypeScript Style

The setup uses *TSLint* and *codelyzer* for code-style checks and *prettier* for code-formatting.
The ruleset includes the recommended Angular code-style rules and additional rules.

**Note**: The following set of rules depend on:
- TSLint ^v5.0.0
- codelyzer ^v4.5.0

## Installation
```sh
npm install git+https://github.com/dev-marlon/angular-tslint-config.git --save-dev
```

## Setup

In `tslint.json`:
```json
{
  "extends": "angular-tslint-config"
}
```

## Usage

### Check
```sh
ng lint
```

### Fix autofixable code
```sh
ng lint --fix
```

### TSLint IDE Support
Enable TSLint integration in PhpStorm to show errors in your code:<br>
Languages & Frameworks > TypeScript > TSLint

Use ```alt + Enter``` shortcut on marked lines to autofix the errors.
