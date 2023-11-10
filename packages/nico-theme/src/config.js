

const StyleDictionary = require('style-dictionary').extend({
  source: [`${__dirname}/tokens/**/*.json`],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/theme/',
      files: [{
        destination: 'nico-theme__default.css',
        format: 'css/variables'
      }]
    }
    // ...
  }
});

StyleDictionary.buildAllPlatforms();