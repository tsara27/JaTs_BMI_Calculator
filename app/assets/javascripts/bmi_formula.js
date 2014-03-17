function Capitalize(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

function CalculationBMI(booleanValue, heightMetric, heightImperial, weightMetric, weightImperial)
{
    if (booleanValue == "Metric")
    {
        a = " "+(weightMetric/Math.pow((heightMetric/100), 2)).toFixed(2);
        return a;
    }else if(booleanValue == "Imperial")
    {
        return " "+((weightImperial/(Math.pow(heightImperial,2))) * 703.06957964).toFixed(2);
    }
}

function AppViewModel() {
    ko.validation.configure({
        messagesOnModified: true,
        insertMessages: false,
        errorElementClass: 'validationElement',
        decorateElement: true
    });
    this.firstName = ko.observable("").extend({ required: true, 
            pattern: {
                params: /^([a-z ])+$/i,
                message: "Should be filled by alphabets."},
            minLength: 2,
            maxLength: 25
          });

    this.lastName = ko.observable("").extend({ required: true, 
            pattern: {
                params: /^([a-z ])+$/i,
                message: "Should be filled by alphabets."},
            minLength: 1,
            maxLength: 25
          });

    this.booleanValue = ko.observable('Metric');
    this.agePerson = ko.observable(20);
    this.weightMetric = ko.observable();
    this.weightImperial = ko.observable();
    this.heightImperial = ko.observable();
    this.heightMetric = ko.observable();
    
    calcHImp = ko.computed(function() {
        a = (this.heightMetric() * 0.393701).toFixed(2);
        return this.heightImperial(a);
    },this);
    calcHMet =  ko.computed(function() {
        a = (this.heightImperial() * 2.54).toFixed(2);
        return this.heightMetric(a);
    },this);
    calcMImp = ko.computed(function() {
        a = (this.weightMetric() * 2.20462).toFixed(2);
        return this.weightImperial(a);
    },this);
    calcMMet =  ko.computed(function() {
        a = (this.weightImperial() * 0.453592).toFixed(2);
        return this.weightMetric(a);
    },this);
    
    // BEGIN - Metric Limiter
    limitWeightMetric = ko.computed(function() {
    minWeightM = 0;
    maxWeightM = 220;
    if (this.weightMetric() < minWeightM)
    {
        return this.weightMetric(minWeightM);
    }
    else if (this.weightMetric() > maxWeightM)
    {
         return this.weightMetric(maxWeightM);
    }
    },this);

    limitHeightMetric = ko.computed(function() {
    minHeightM = 0;
    maxHeightM = 250;
    if (this.heightMetric() < minHeightM)
    {
        return this.heightMetric(minHeightM);
    }else if (this.heightMetric() > maxHeightM)
    {
        return this.heightMetric(maxHeightM);
    }
    },this);
    //END - Metric Limiter

    // BEGIN - Imperial Limiter
    limitWeightImperial = ko.computed(function() {
    minWeightI = 0;
    maxWeightI = 440;
    if (this.weightImperial() < minWeightI)
    {
        return this.weightImperial(minWeightI);
    }
    else if (this.weightImperial() > maxWeightI)
    {
         return this.weightImperial(maxWeightI);
    }
    },this);

    limitHeightImperial = ko.computed(function() {
    minHeightI = 0;
    maxHeightI = 200;
    if (this.heightImperial() < minHeightI)
    {
        return this.heightImperial(minHeightI);
    }else if (this.heightImperial() > maxHeightI)
    {
        return this.heightImperial(maxHeightI);
    }
    },this);   
    // END - Imperial Limiter
    
    // BEGIN - Age limiter
    limitAge = ko.computed(function() {
    minAge = 1;
    maxAge = 100;
    if (this.agePerson() < minAge)
    {
        return this.agePerson(minAge);
    }else if (this.agePerson() > maxAge)
    {
        return this.agePerson(maxAge);
    }
    },this);
    //END - Age limiter

    this.resultBMI = ko.observable("");
    this.fullName = ko.observable("");

    this.hasil = ko.computed(function(){
        return CalculationBMI(this.booleanValue(), this.heightMetric(), this.heightImperial(), this.weightMetric(), this.weightImperial());
    },this);

    this.genName = ko.computed(function() {
    return "Hello, "+Capitalize(this.firstName()) + " " + Capitalize(this.lastName())+" !";}, this);

    this.countBMI = function(){
        if(this.firstName.isValid() == true && this.firstName.isValid() == true)
        {
            this.resultBMI(this.hasil());
            this.fullName(this.genName());    
        }
        else
        {
            alert('Please check your submission.');
        }
    }
}

ko.applyBindings(new AppViewModel());

