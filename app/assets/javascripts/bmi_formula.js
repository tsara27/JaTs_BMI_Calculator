// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    this.firstName = ko.observable("");
    this.lastName = ko.observable("");
    this.fullName = ko.computed(function() {
    return this.firstName() + " " + this.lastName();}, this);
    this.capitalizeLastName = function() {
        var currentVal = this.lastName();        // Read the current value
        this.lastName(currentVal.toUpperCase()); // Write back a modified value
    };
}

ko.applyBindings(new AppViewModel());

