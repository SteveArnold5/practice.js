function Group(){}

Group.prototype.createElement = function(){
	var groupElement = $("<fieldset></fieldset>");
	var em = new ElementManipulator();
	em.addChildElements(groupElement, this.fields, Field);
	return groupElement;
}