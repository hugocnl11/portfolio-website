module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Content-Type',
            value: 'image/x-icon',
          },
        ],
      },
    ];
  },

}
