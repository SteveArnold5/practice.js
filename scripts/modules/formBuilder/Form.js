function Form(){
}

Form.prototype.createElement = function(){
	var em = new ElementManipulator();
	return em.createElement("<form></form>", this.groups, Group);
}
	