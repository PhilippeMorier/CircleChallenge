switch (process.env.NODE_ENV) {
    case 'coverage':
        module.exports = require('./webpack/webpack.coverage.config.js');
        break;
    case 'development':
        module.exports = require('./webpack/webpack.development.config.js');
        break;
    case 'production':
        module.exports = require('./webpack/webpack.production.config.js');
        break;
    default:
        console.error('Please set one of the following environments:\n - \'coverage\'\n - \'development\'\n - \'production\'')
}
