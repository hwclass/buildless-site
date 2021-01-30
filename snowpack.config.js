/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: false },
    src: { url: '/dist' },
  },
  plugins: ['@snowpack/plugin-dotenv'],
  packageOptions: {
    source: 'remote',
  },
};
