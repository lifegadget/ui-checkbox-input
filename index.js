/* jshint node: true */
'use strict';

module.exports = {
	name: 'ui-checkbox-input',
	included: function(app) {
		this._super.included(app);

		app.import('vendor/ui-checkbox-input/ui-checkbox-input.css');
	}
};
