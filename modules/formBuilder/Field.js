function Field(){}

Field.prototype.createElement = function(){
	var em = new ElementManipulator();
	var creator = new window[this.fieldType + "Creator"];
	var input = creator.create(this);
    var field = em.createElement("<div><span class='fieldLabel'>" + this.label + ":&nbsp;</span><span class='fieldInput'></span></div>");
	field.find(".fieldInput").append(input);
	return field;
}