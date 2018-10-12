module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  globals: {
    window: true
  },
  transformIgnorePatterns: ['node_modules/(?!react-|drizzle).+\\.js$'],
  setupFiles: ['./test/setup.js']
};