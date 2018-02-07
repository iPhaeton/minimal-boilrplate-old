switch (process.env.NODE_ENV) {
    case 'local': {
        const options = require('./options.dev');
        module.exports = require('./base')(options);
        break;
    }
    case 'development': {
        const options = require('./options.dev');
        module.exports = require('./base')(options);
        break;
    }
    default: {
        module.exports = require('./base')({});
        break;
    }
}
