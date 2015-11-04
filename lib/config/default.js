var config = {
  app: {
    name: 'lego-vis',
    version: '0.0.1'
  },

  server: {
    port: 3000
  },

  template: {
    path: 'app/views',
    options: {
      map: {
        etc: 'etc'
      }
    }
  },

  session: {
    secretKey: 'legoApp'
  }
};

export default config;