export default {
  define: {
    'import.meta.env.VITE_NEWS_API_KEY': JSON.stringify(process.env.VITE_NEWS_API_KEY || '0ae22c0a6e884ff99fdc04c8959d80e3'),
  },
  base: "/newsexplorer/"
};