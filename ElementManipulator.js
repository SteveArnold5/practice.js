function ElementManipulator(){}

ElementManipulator.prototype.addChildElements = function(parentElement, children, type){
	var tc = new TypeConverter();
	$(children).each(function(index, item){
		parentElement.append(tc.convertItemToType(item, type).createElement());
	})
}