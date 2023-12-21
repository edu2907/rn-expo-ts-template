// @ts-ignore
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            "@env": "./src/shared/config/env.js",
            "@ui": "./src/shared/ui",
            "@shared": "./src/shared",
            "@modules": "./src/modules",
          },
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ios.tsx',
            '.android.tsx',
            '.web.ts',
            '.ts',
            '.tsx',
            '.js',
          ],
        },
      ]
    ],
  };
};
