function TypeConverter(){}

TypeConverter.prototype.convertItemsToType = function(items, type){
	$(items).each(function(index, item){
		convertItemToType(item, type)
	});
}

TypeConverter.prototype.convertItemToType = function(item, type){
	var obj = $.extend(item, new type());
	console.log(obj);
	return obj
}