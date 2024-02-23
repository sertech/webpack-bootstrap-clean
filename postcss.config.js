const cssnanoPlugin = require('cssnano');

if (process.env.NODE_ENV === 'production') {
    module.exports = {
        plugins: ['postcss-preset-env', cssnanoPlugin],
    };
} else {
    module.exports = {
        plugins: ['postcss-preset-env'],
    };
}
