define(['jquery', 'scripts/modules/utils/ElementManipulator', 'scripts/modules/formBuilder/Field'], function($, em, field) {
	return {
		createElement : function(){
			return em.createElement("<fieldset></fieldset>", this.fields, field);
		}	
	};	
});