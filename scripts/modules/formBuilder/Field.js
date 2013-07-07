define(['jquery', 'scripts/modules/utils/ElementManipulator', 'scripts/modules/formBuilder/InputCreatorFactory'], function($, em, inputCreatorFactory){
	return {
		createElement : function(){
			var field = em.createElement("<div><span class='fieldLabel'>" + this.label + ":&nbsp;</span><span class='fieldInput'></span></div>");
	    	var input = inputCreatorFactory.getInputCreator(this.fieldType).create(this);
			field.find(".fieldInput").append(input);
			return field;
		}
	};
});