function Field(){}

Field.prototype.createElement = function(){
    return $("<div><span class='fieldLabel'>" + this.label + ":&nbsp;</span><span class='fieldInput'><input name='" + this.name + "' type='text'/></span></div>");
}