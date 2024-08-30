import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Set the base path based on the deployment target
  const base = mode === 'github' ? '/personal-project/' : '/';

  return {
    base, 
    plugins: [react()],
  }
});
