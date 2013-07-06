
function addChildElements(parentElement, children, type){
	$(children).each(function(index, item){
		parentElement.append(convertItemToType(item, type).createElement());
	})
}

function convertItemsToType(items, type){
	$(items).each(function(index, item){
		convertItemToType(item, type)
	});	
}

function convertItemToType(item, type){
	var obj = $.extend(item, new type());
	console.log(obj);
	return obj
}

