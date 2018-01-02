$(function() {
  $("form[name='contactus']").validate({
    rules: {
      fname: "required",
      lname: "required",
      email: {
        required: true,
        email: true
      },
      areacode: {
        required: true,
        number: true,
        minlength: 3
      },
      localprefix: {
        required: true,
        number: true,
        minlength: 3
      },
      localline: {
        required: true,
        number: true,
        minlength: 4
      },
       checkboxreason: {
            required: true,
            minlength: 1
          }
    },
    messages: {
      checkboxreason: "Please select at least one reason of inquiry",
      fname: "Please enter your first name",
      lname: "Please enter your last name",
      areacode: "Please enter the 3 digits area code",
      localprefix: "Please enter the next 3 digits of your phone number",
      localline: "Please enter the remaining 4 digits of your phone number",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });


  $("form[name='volunteer']").validate({
    rules: {
      fname: "required",
      lname: "required",
      email: {
        required: true,
        email: true
      },
      areacode: {
        required: true,
        number: true,
        minlength: 3
      },
      localprefix: {
        required: true,
        number: true,
        minlength: 3
      },
      localline: {
        required: true,
        number: true,
        minlength: 4
      },
       checkboxreason: {
            required: true,
            minlength: 1
          }
    },
    messages: {
      checkboxreason: "Please select at least one reason of inquiry",
      fname: "Please enter your first name",
      lname: "Please enter your last name",
      areacode: "Please enter the 3 digits area code",
      localprefix: "Please enter the next 3 digits of your phone number",
      localline: "Please enter the remaining 4 digits of your phone number",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });

});