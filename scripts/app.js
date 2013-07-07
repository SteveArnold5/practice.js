define(['jquery', 'scripts/modules/formBuilder/Form', "scripts/modules/utils/ElementManipulator"], function ($, form, em) {
   return {
      init: function (formConfig) {
		em.addChildElements($("body"),[formConfig], form);
      }
   };
});