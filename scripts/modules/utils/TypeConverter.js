define(['jquery'], function($) {
	return {
		convertItemToType : function(item, type){
			return $.extend(item, type);
		}
	};
});