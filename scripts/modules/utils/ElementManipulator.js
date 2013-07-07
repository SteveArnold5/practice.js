define(['jquery', 'scripts/modules/formBuilder/Form', "scripts/modules/utils/TypeConverter"], function ($, Form, tc) {
	return {
		createElement : function(html, children, childType){
			var element = $(html);
			this.addChildElements(element, children, childType);
			return element;
		},
		addChildElements : function(parentElement, children, type){
			$(children).each(function(index, item){
				parentElement.append(tc.convertItemToType(item, type).createElement());
			})
		}
	};
});