import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        ['theme-scripts']: './src/js/main.ts',
        ['theme-styles']: 'src/styles/style.css',
      },
      output: {
        // dir: './public',
        entryFileNames: 'scripts/[name].min.js',
        assetFileNames: (asset) => {
          const hasStyleExt = asset.name?.includes('.css');
          if (hasStyleExt) {
            return `styles/[name].min.[ext]`;
          }
          return `[name].[ext]`;
        },
      },
    },
  },
});
