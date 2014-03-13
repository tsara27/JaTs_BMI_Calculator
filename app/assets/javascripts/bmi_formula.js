function Capitalize(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

function CalculationBMI(bodyWeight, bodyHeight, booleanValue)
{
        self = this.Calc; 
        self = ko.computed(function() {
            return bodyWeight/(Math.pow((bodyHeight/100),2));
        }, this);
 
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

    this.resultBMI = ko.observable(" ( )");
    this.hasil = ko.computed(function(){
            return " "+(this.bodyWeight()/(Math.pow((this.bodyHeight()/100),2))).toFixed(2);
        },this);
    this.countBMI = function(){
        this.resultBMI(this.hasil());
    }
    

}

ko.applyBindings(new AppViewModel());
