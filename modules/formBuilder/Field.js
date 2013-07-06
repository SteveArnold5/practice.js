function Field(){}

Field.prototype.createElement = function(){
	var em = new ElementManipulator();
    return em.createElement("<div><span class='fieldLabel'>" + this.label + ":&nbsp;</span><span class='fieldInput'><input name='" + this.name + "' type='text'/></span></div>");
}