function Group(){}

Group.prototype.createElement = function(){
	var groupElement = $("<fieldset></fieldset>");
	addChildElements(groupElement, this.fields, Field);
	return groupElement;
}