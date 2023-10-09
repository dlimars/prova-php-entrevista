const mix = require("laravel-mix");
const fs = require('fs')

// directory to check if exists
const dir = "./assets";

var dirRaiz = "./assets";

mix.options({
  publicPath: "./",
});

mix.webpackConfig({
  resolve: {
    modules: ["node_modules"],
    alias: {
      jquery: "jquery/src/jquery",
    },
  },
});

/**
 * Javascripts
 */
mix.js("resources/js/app.js", dirRaiz + "/js").sourceMaps();

/**
 * Folhas de Estilo
 */
mix.sass("resources/scss/app.scss", dirRaiz + "/css").options({
  processCssUrls: false,
});

/**
 * Arquivos de Imagens
 */
mix.copyDirectory("resources/img", dirRaiz + "/img");

/**
 *
 * Arquivos de fontes
 */
mix.copyDirectory('node_modules/@fortawesome/fontawesome-free/webfonts/', dirRaiz + '/fonts')