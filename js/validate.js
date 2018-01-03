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
      email: "Please enter a valid email address"
    },
    submitHandler: function(form) {
      //form.submit();
      postForm();
    }
  });

  function postForm() {
    var ajaxRequest;
    $("#result").html('');
    var values = $("#contactus").serialize()
    ajaxRequest= $.ajax({
            url: "/js/test.php",
            type: "post",
            data: values
        });

     ajaxRequest.done(function (response, textStatus, jqXHR){
          // show successfully for submit message
          $("#result").html(response);
     });

     /* On failure of request this function will be called  */
     ajaxRequest.fail(function (){
       // show error
       $("#result").html('There was an error in processing the request. Please try again.');
     });
  }

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
       checkboxdo: {
            required: true,
            minlength: 1
          },
       checkboxlanguage: {
            required: true,
            minlength: 1
          },
       checkboxshift: {
            required: true,
            minlength: 1
          },
          volunteernow: "required",
          address: "required",
          city: "required",
          country : "required"
    },
    messages: {
      fname: "Please enter your first name",
      lname: "Please enter your last name",
      areacode: "Please enter the 3 digits area code",
      localprefix: "Please enter the next 3 digits of your phone number",
      localline: "Please enter the remaining 4 digits of your phone number",
      email: "Please enter a valid email address",
      address: "Please enter your address",
      city: "Please enter your city of residence",
      country: "Please enter your country of residence",
      checkboxdo: "Please select at least one field",
      checkboxlanguage: "Please select at least one language",
      checkboxshift:"Please select at least one shift",
      volunteernow: "Please answer the background-check question"

    },
    submitHandler: function(form) {
      form.submit();
    }
  });

});