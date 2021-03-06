/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dummy',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
	contentSecurityPolicy: {
	    'default-src': "'unsafe-eval' http://cloudfront.net",
	    'script-src': "'self'",
	    'font-src': "'self' http://fonts.gstatic.com http://fonts.googleapis.com",
	    'connect-src': "'self'",
	    'img-src': "'self'",
	    'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com",
	    'media-src': "'self'"
	  }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
	ENV.contentSecurityPolicy['default-src'] = "'unsafe-eval' https://d3ijcis4e2ziok.cloudfront.net ";	
	ENV.contentSecurityPolicy['script-src'] = "'self' 'unsafe-eval' 0.0.0.0:35729";	
	ENV.contentSecurityPolicy['connect-src'] = "'self' 0.0.0.0:35729";
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
