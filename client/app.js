require.config({
  baseUrl: '/assets/js',
  paths: {
    // require
    'domready': 'vendor/require.domready',
    // lodash
    '_': 'vendor/lodash',
    // react
    'react': 'vendor/react',
    'flux': 'vendor/flux',
    // relate
    'relate': 'vendor/relate'
  }
});

define([
  // dom
  'domready!',
  // react
  'react',
  // application
  'components/application/Application',
], function (
  // dom
  dom,
  // react
  React,
  // application
  Application
) {

  React.render(<Application />, dom.body);
})
