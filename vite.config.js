import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {base} from 'motion/react-client';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio-With-React/',
});
