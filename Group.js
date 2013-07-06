function Group(){}

Group.prototype.createElement = function(){
	var em = new ElementManipulator();
	return em.createElement("<fieldset></fieldset>", this.fields, Field);
}