const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.vue', '.ts'],
        alias: {
            '@': path.resolve(__dirname, 'resources/js')
        }
    },
    output: {
        chunkFilename: "js/chunks/[name].js"
    },
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": ""
        }
    },
});

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');
