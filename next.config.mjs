// postcss.config.mjs
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssPresetEnv from 'postcss-preset-env';

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-preset-env': {
        stage: 3,
        features: {
            'nesting-rules': true,
        }
    },
    cssnano: {
      preset: 'default'
    },
  },
};
