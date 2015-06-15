require.config({
  baseUrl: '/assets/js',
  paths: {
    // require
    'domready': 'vendor/require.domready',
    // lodash
    '_': 'vendor/lodash',
    // react
    'react': 'vendor/react'
  }
});

define([
  // dom
  'domready!',
  // react
  'react',
  // application
  'components/application/application'
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
