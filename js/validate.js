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
      postForm("contactus");
    }
  });

  function rehash(value) {
    var hash = 5381;
    value = value.toUpperCase();
    for (var i = 0; i < value.length; i++) {
      hash = ((hash << 5) + hash) + value.charCodeAt(i);
    }
    console.log("returned hash: " + hash);
    return hash;
  }

  function postForm(formname) {
    var ajaxRequest;
    var values = $("#" + formname).serialize();
    var formdata = $("#" + formname).serializeArray();
    var data = {};
    $(formdata ).each(function(index, obj){
        data[obj.name] = obj.value;
    });

    console.log(values);
    console.log("data.defaultReal: " + data.defaultReal);
    console.log("data.defaultRealHash: " + data.defaultRealHash);
    console.log("data.defaultReal hash: " + rehash(data.defaultReal));
    
    if(data.defaultRealHash == rehash(data.defaultReal)){
      //form.submit();

      /*
        ajaxRequest= $.ajax({
            url: "/js/test.php",
            type: "post",
            data: values
        });

       ajaxRequest.done(function (response, textStatus, jqXHR){
            // show successfully for submit message
            $(window).scrollTop($('#result').offset().top).scrollLeft($('#result').offset().left);
            $("#result").html("Form has been successfully submitted! Thanks for contacting us <b>" + data.fname + "</b>! <br/>We will be in touch shortly.");
            $("#result").removeClass("error");
            $("#result").show();
       });

       // On failure of request this function will be called 
       ajaxRequest.fail(function (){
          // show error
          $(window).scrollTop($('#result').offset().top).scrollLeft($('#result').offset().left);
          $("#result").html("There was an issue while submitting your information. Please try again later.");
          $("#result").addClass("error");
          $("#result").show();
       });*/

      document.getElementById(formname).reset();
      $(window).scrollTop($('#result').offset().top).scrollLeft($('#result').offset().left);
      $("#result").html("Form has been successfully submitted! Thanks for contacting us <b>" + data.fname + "</b>! <br/>We will be in touch shortly.");
      $("#result").removeClass("error");
      $("#result").show();
      
    } else {
      $(".realperson-regen").click();
      $(window).scrollTop($('#result').offset().top).scrollLeft($('#result').offset().left);
      $("#result").html("The code you entered does not match. Please enter the code as displayed.");
      $("#result").addClass("error");
      $("#result").show();
    }

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
       checkboxavail: {
            required: true,
            maxlength: 1
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
      checkboxdo: "Please select at least one role",
      checkboxlanguage: "Please select at least one language",
      checkboxshift:"Please select at least one shift",
      checkboxavail:"Please select One availability",
      volunteernow: "Please answer the background-check question",
      defaultReal: "Please enter the code displayed above"
    },
    submitHandler: function(form) {
      //form.submit();
      postForm("volunteer");
    }
  });

});