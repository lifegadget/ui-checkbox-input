import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'span',
	classNames: ['ui-checkbox-input', 'checkbox-container'],
	attributeBindings: ['tabindex'],
	tabStop: true,
	tabindex: function() {
		var disabled = this.get('disabled');
		var tabStop = this.get('tabStop');
		if(tabStop && !disabled) {
			return 0;
		} else {
			return null;
		}
	}.property('tabStop','disabled'),
	size: 'default',
	sizeClass: function() {
		var size = this.get('size');
		var supportedSizes = ['default','small','large'];
		if (supportedSizes.contains(size)) {
			return size;
		} else {
			console.warning('checkbox set to unsuppored size %s; supported sizes are: %s', size, JSON.stringify(supportedSizes));
		}
	}.property('size'),
	checked: false,
	disabled: false,
	click: function() {
		this.toggleState();
	},
	keyDown: function(evt) {
		if(evt.keyCode === 32) {
			this.toggleState();
		} 
	},
	toggleState: function() {
		if(!this.get('disabled')) {
			this.set('checked', !this.get('checked'));
		}
	}
});
