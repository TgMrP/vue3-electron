module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        publish: ['github'],
        'snap.publish': {
          provider: 'generic',
          url: 'https://anydummyurl.com',
        },
      },
    },
  },
};
