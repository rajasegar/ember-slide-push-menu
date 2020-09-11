'use strict';

const getChannelURL = require('ember-source-channel-url'); // eslint-disable-line

module.exports = async function() {
  return {
    scenarios: [
      {
        name: 'ember-lts-3.16',
        npm: {
          devDependencies: {
            'ember-source': '~3.16.0'
          }
        }
      },
      {
        name: 'ember-lts-3.20',
        npm: {
          devDependencies: {
            'ember-source': '~3.20.5'
          }
        }
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('release')
          }
        }
      },
      {
        name: 'embroider-tests',
        npm: {
          devDependencies: {
            '@embroider/core': '*',
            '@embroider/webpack': '*',
            '@embroider/compat': '*',
          },
        },
      },
    ]
  };
};
