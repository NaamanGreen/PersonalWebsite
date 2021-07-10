$('#contactForm').validate({
    rules: {
        name: 'required',
        company: 'required',
        email: {required: true, email: true},
        message: 'required'
    }, 

    messages: {
        name: 'Please provide your name.',
        company: "Please provide your company's name.",
        email: 'Please provide a valid email address.',
        message: 'Please let me know why you are interested in contacting me.'
    },

    errorContainer: '#messagebox',
    errorLabelContainer: '#messagebox ul'
});