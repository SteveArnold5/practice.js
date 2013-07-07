define(['jquery'], function($){
	return {
		create : function(field){
			var select = $("<select></select>");
			$(field.selectOptions).each(function(i, option){
				var htmlOption = $("<option value='" + option.value + "'>" + option.text + "</option>");
				select.append(htmlOption);
			});
			return select;
		}
	};
});
