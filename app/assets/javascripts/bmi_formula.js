function Capitalize(string)
{
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}
function AppViewModel() {
    this.firstName = ko.observable("");
    this.lastName = ko.observable("");
    this.booleanValue = ko.observable('Metric');
    this.bodyHeight = ko.observable(150);
    this.bodyWeight = ko.observable(45);
    
    limitWeight = ko.computed(function() {
    	minWeight = 1;
    	maxWeight = 220;
    	if (this.bodyWeight() < minWeight)
    	{
    		return this.bodyWeight(minWeight);
    	}else if (this.bodyWeight() > maxWeight)
    	{
    		return this.bodyWeight(maxWeight);
    	}
    },this);

    limitHeight = ko.computed(function() {
    	minHeight = 1;
    	maxHeight = 250;
    	if (this.bodyHeight < minHeight)
    	{
    		return this.bodyHeight(minHeight);
    	}else if (this.bodyHeight() > maxHeight)
    	{
    		return this.bodyHeight(maxHeight);
    	}
    },this);
    this.fullName = ko.computed(function() {
    return Capitalize(this.firstName()) + " " + Capitalize(this.lastName());}, this);

}

ko.applyBindings(new AppViewModel());
