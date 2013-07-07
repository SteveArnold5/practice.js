define(['jquery', 'scripts/modules/utils/ElementManipulator', 'scripts/modules/formBuilder/Group'], function($, em, group) {
	return {
		createElement : function(){
			return em.createElement("<form></form>", this.groups, group);
		}
	};
});
	