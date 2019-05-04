module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/p/hello-nextjs': { page: '/post', query: { id: 'Hello Next.js' } },
      '/p/learn-nextjs': {
        page: '/post',
        query: { id: 'Learn Next.js is awesome' }
      },
      '/p/deploy-apps-with-zeit': {
        page: '/post',
        query: { id: 'Deploy apps with Zeit' }
      }
    };
  }
};
