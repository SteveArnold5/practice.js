function Form(){
}

Form.prototype.createElement = function(){
	var formElement = $("<form></form>");
	var em = new ElementManipulator();
	em.addChildElements(formElement, this.groups, Group);
	return formElement;
}
	