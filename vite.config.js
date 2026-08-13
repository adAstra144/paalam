import { resolve } from 'path'
import { defineConfig } from 'vite'

const routes = {
  '/home': '/sections/home.html',
  '/contact': '/sections/contact.html',
  '/store': '/sections/store.html',
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        home: resolve(import.meta.dirname, 'sections/home.html'),
        contact: resolve(import.meta.dirname, 'sections/contact.html'),
        store: resolve(import.meta.dirname, 'sections/store.html'),
      },
    },
  },
  plugins: [
    {
      name: 'dev-rewrites',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (routes[req.url]) req.url = routes[req.url]
          next()
        })
      },
      configurePreviewServer(server) {
        server.middlewares.use((req, res, next) => {
          if (routes[req.url]) req.url = routes[req.url]
          next()
        })
      },
    },
  ],
})