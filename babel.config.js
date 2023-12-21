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
            "@env": "./src/env.js",
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
