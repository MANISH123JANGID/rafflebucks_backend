$(document).ready(function(){
  
  $("#email").click(function(){
     
      $("#emailsvg").css("color","orangered");
  });
  });

  $(document).ready(function(){
    $("#password").click(function(){
        $("#pass").css("color","orangered");
    });
    });

    function validate() {
      var emailText = document.getElementById('email').value;
      var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
      if (pattern.test(emailText)) {
        return true;
      } else {
        document.getElementById('lbltxt').innerHTML="Please enter a valid email address";
        return false;
      }
    }
    
    window.onload = function() {
      document.getElementById('myform').onsubmit = validateEmail;
    }