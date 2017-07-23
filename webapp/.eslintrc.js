// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': 0,
    'semi': [1, 'never'],
    'comma-dangle': 0,
    'padded-blocks': 0,
    'spaced-comment': 0,
    'no-undef': 0,
    'func-names': 0,
    'no-multiple-empty-lines': [2, {'max': 2, 'maxEOF': 2}],
    'max-len': [2, 200, 2, {
      'ignoreUrls': false,
      'ignoreComments': false
    }],
    'no-param-reassign': 1,
    'global-require': 0,
    'no-useless-escape': 0,
    'radix': 0
  }
}
