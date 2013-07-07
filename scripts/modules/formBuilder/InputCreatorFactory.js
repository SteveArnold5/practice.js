define(['scripts/modules/formBuilder/TextFieldCreator','scripts/modules/formBuilder/SelectFieldCreator'], function(textFieldCreator, selectFieldCreator){
	return {
		getInputCreator : function(inputType){
			this["textFieldCreator"] = textFieldCreator;
			this["selectFieldCreator"] = selectFieldCreator;
			var creator = this[inputType + "Creator"];
			return creator;
		}
	};
})