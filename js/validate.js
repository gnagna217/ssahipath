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
          },
       defaultReal: "required"
    },
    messages: {
      checkboxreason: "Please select at least one reason of inquiry",
      fname: "Please enter your first name",
      lname: "Please enter your last name",
      areacode: "Please enter the 3 digits area code",
      localprefix: "Please enter the next 3 digits of your phone number",
      localline: "Please enter the remaining 4 digits of your phone number",
      email: "Please enter a valid email address",
      defaultReal: "Please enter the code displayed above"
    },
    submitHandler: function(form) {
      //form.submit();
      postForm(form);
    }
  });

  function hash(value) {
    var hash = 5381;
    for (var i = 0; i < value.length; i++) {
      hash = ((hash << 5) + hash) + value.charCodeAt(i);
    }
    return hash;
  }

  function postForm() {
    var ajaxRequest;
    var values = $("#contactus").serialize();
    var formdata = $("#contactus").serializeArray();
var data = {};
$(formdata ).each(function(index, obj){
    data[obj.name] = obj.value;
});

console.log(values);
    
    
    console.log("data.defaultReal: " + data.defaultReal);
    console.log("data.defaultRealHash: " + data.defaultRealHash);
    console.log("data.defaultReal hash: " + hash(data.defaultReal));
    if(data.defaultRealHash == hash(data.defaultReal)){
      form.submit();
    } else {
      $(".realperson-regen").click();
      $("#result").html("The code you entered does not match. Please enter the code as displayed");
      $("#result").show();
    }
    console.log();
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
          country : "required",
       defaultReal: "required"
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
      volunteernow: "Please answer the background-check question",
      defaultReal: "Please enter the code displayed above"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });

});