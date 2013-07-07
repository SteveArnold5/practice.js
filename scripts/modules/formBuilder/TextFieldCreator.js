define(['jquery'], function($){
	return {
		create : function(field){
			return $("<input name='" + field.name + "' type='text'/>");
		}
	};
});