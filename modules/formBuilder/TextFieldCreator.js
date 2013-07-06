function TextFieldCreator(){}

TextFieldCreator.prototype.create = function(field){
	return $("<input name='" + field.name + "' type='text'/>");
}