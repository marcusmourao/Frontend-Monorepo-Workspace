const StyleDictionary = require('style-dictionary').extend({
  source: [`${__dirname}/tokens/**/*.json`],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/theme/',
      files: [
        {
          destination: 'nico-theme__default.css',
          format: 'css/variables',
        },
      ],
      options: {
        selector: ".nico__theme--default"
      }
    },
    ts: {
      transformGroup: 'js',
      files: [
        {
          format: 'javascript/module',
          destination: 'dist/index.js',
        },
        {
          format: 'typescript/module-declarations',
          destination: 'dist/index.d.ts',
        },
      ],
    },
    // ...
  },
});

StyleDictionary.buildAllPlatforms();
