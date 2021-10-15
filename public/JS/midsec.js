//THIS IS FOR THE MID NIGHT DEALS 

  

  // Set the date we're counting down to
  var countDownDate = new Date("August 18, 2021 13:34:00").getTime();
  
  // Update the count down every 1 second
  var x = setInterval(function() {
  
    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s " +"LEFT";
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      
      document.getElementById("demo").innerHTML = "DEAL EXPIRED!";
    
    }
  }, 1000);


//THIS IS FOR THE SMARTPHONE KI SMART DEALS



  var countDownDate1 = new Date("August 16, 2021 13:39:00").getTime();
 
  // Update the count down every 1 second
  var x1 = setInterval(function() {
  
    // Get today's date and time
    var now1 = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance1 = countDownDate1 - now1;
  
    // Time calculations for days, hours, minutes and seconds
    var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
    var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById("demo1").innerHTML = days1+"d "+ hours1 + "h "
    + minutes1 + "m " + seconds1 + "s " +"LEFT";
  
    // If the count down is finished, write some text
    if (distance1 < 0) {
      clearInterval(x1);
    
      document.getElementById("demo1").innerHTML ="DEAL EXPIRED!";
    }
  }, 1000);



  /* footerjs  */

  $(document).ready(function(){
    $("#knowus").css("color","white");
    $("#knowus").css("text-decoration","none");
    $("#infosvg").css("color", "white");
    $("#knowus").hover(function(){
      $("#knowus").css("color","black");
      $("#infosvg").css("color", "black");
      }, function(){
      $("#infosvg").css("color", "white");
      $("#knowus").css("color","white");
    });
  });