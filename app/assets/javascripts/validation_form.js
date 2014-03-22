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