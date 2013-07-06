function ElementManipulator(){}

ElementManipulator.prototype.createElement = function(html, children, childType){
	var element = $(html);
	this.addChildElements(element, children, childType);
	return element;
}

ElementManipulator.prototype.addChildElements = function(parentElement, children, type){
	var tc = new TypeConverter();
	$(children).each(function(index, item){
		parentElement.append(tc.convertItemToType(item, type).createElement());
	})
}