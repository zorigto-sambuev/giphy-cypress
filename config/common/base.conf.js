const hooks = require('./hooks.conf');

exports.config = {
    specs: [
        './specs/**/*.spec.js'
    ],

    maxInstances: 1,
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://giphy.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 1,
    services: ['devtools'],
    framework: 'mocha',
    reporters: ['spec', ['allure', {
        disableWebdriverStepsReporting: true
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    ...hooks
}
