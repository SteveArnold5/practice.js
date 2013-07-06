
function addChildElements(parentElement, children, type){
	var tc = new TypeConverter();
	$(children).each(function(index, item){
		parentElement.append(tc.convertItemToType(item, type).createElement());
	})
}



