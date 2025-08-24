1. npm create vite@latest my-project  
2. cd my-project  
3. npm install tailwindcss @tailwindcss/vite  

4. In vite.config.js :

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ]
});

5.@import "tailwindcss";