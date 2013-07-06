function Form(){
}

Form.prototype.createElement = function(){
	var formElement = $("<form></form>");
	addChildElements(formElement, this.groups, Group);
	return formElement;
}
	