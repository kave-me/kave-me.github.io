module.exports = {
  async redirects() {
    return [
      {
        source: '/posts',
        destination: '/blog',
        permanent: true
      }
    ];
  }
};
