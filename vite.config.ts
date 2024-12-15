import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
})

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import  createBabelPlugin from 'vite-plugin-babel';

// export default defineConfig({
//   plugins: [
//     react(),
//     createBabelPlugin()
//   ],
//   build: {
//     target: 'es2015', // Укажите целевой стандарт JavaScript
//     polyfillModulePreload: false // Отключите предзагрузку полифилов
//   }
// });
