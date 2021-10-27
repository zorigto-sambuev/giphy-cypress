import merge from 'deepmerge';
import baseConf from './common/base.conf'

exports.config = merge(baseConf.config, {
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
}, { clone: false })