$(document).ready(function(){
  // Show hide popover
  $("#usersvg").mouseover(function(){
      $(".tooltipopt").fadeIn(200);
      $(".tooltipopt").addClass("user_opt_transform");
      $("#usercolor").css("color","#4568dc");
  });
  });


$(document).ready(function(){
$('.closeblocker').on("mouseleave",function(){
  
  $("#usercolor").css("color","black");
  $(".tooltipopt").fadeOut(200).removeClass("user_opt_transform");
});
});


$(document).ready(function(){
  // Show hide popover
  $("#morebtn").mouseover(function(){
      $(".tooltipopt1").fadeIn(200);
      $(".tooltipopt1").addClass("user_opt_transform");
      $("#morecolor").css("color","#4568dc");
  });
});   

$(document).ready(function(){
$('.closeblocker').on("mouseleave",function(){
  $(".tooltipopt1").fadeOut(200);
  $(".tooltipopt1").removeClass("user_opt_transform");
  $("#morecolor").css("color","black");
});
});


$(document).ready(function(){
$('.tooltipopt2 ,.tooltip').on("mouseleave",function(){
  $("#notisvg").css("color","black");
  $(".tooltipopt2").fadeOut(300);
  
});
});


  /* FOR SIDE NAV */
  
    $(document).ready(function(){
     $('#opensidenav').click(function(){
        $('#sidenav').addClass( "enter");
        $('#sidenav').css("transition:0.3s");
        $("#backover").css("display","block");
        $('#headopt').css('z-index','9');
     });
     });
     $(document).ready(function(){
      $('#closenav').click(function(){
         $('#sidenav').removeClass("enter");
        $("#backover").css("display","none");
        $('#headopt').css('z-index','10');
      });
      });
     $(document).ready(function(){
      $('#backover').click(function(){
         $('#sidenav').removeClass("enter");
         $("#backover").css("display","none");
         $('#headopt').css('z-index','10');
      });
    });


  
  $(document).ready(function(){
    // Show hide popover
    $("#electro").mouseover(function(){
        $("#navbox1").fadeIn(100);
       
    });
  });   
  
  $(document).ready(function(){
  $('.toolnav,#navbox1').on("mouseleave",function(){
    $("#navbox1").fadeOut(100);
  });
  });


  $(document).ready(function(){
    // Show hide popover
    $("#home").mouseover(function(){
        $("#navbox2").fadeIn(100);
       
    });
  });   
  
  $(document).ready(function(){
  $('#home,#navbox2').on("mouseleave",function(){
    $("#navbox2").fadeOut(100);
  });
  });

  $(document).ready(function(){
    // Show hide popover
    $("#men").mouseover(function(){
        $("#navbox3").fadeIn(100);
       
    });
  });   
  
  $(document).ready(function(){
  $('#men,#navbox3').on("mouseleave",function(){
    $("#navbox3").fadeOut(100);
  });
  });

  $(document).ready(function(){
    // Show hide popover
    $("#women").mouseover(function(){
        $("#navbox4").fadeIn(100);
    });
  });   
  
  $(document).ready(function(){
  $('#women,#navbox4').on("mouseleave",function(){
    $("#navbox4").fadeOut(100);
  });
  });

  $(document).ready(function(){
    // Show hide popover
    $("#baby").mouseover(function(){
        $("#navbox5").fadeIn(100);
       
    });
  });   
  
  $(document).ready(function(){
  $('#baby,#navbox5').on("mouseleave",function(){
    $("#navbox5").fadeOut(100);
  });
  });


  $(document).ready(function(){
    // Show hide popover
    $("#homeapp").mouseover(function(){
        $("#navbox6").fadeIn(100);
       
    });
  });   
  
  $(document).ready(function(){
  $('#homeapp,#navbox6').on("mouseleave",function(){
    $("#navbox6").fadeOut(100);
  });
  });
  
  $(document).ready(function(){
    // Show hide popover
    $("#sports").mouseover(function(){
        $("#navbox7").fadeIn(100);
       
    });
  });   
  
  $(document).ready(function(){
  $('#sports,#navbox7').on("mouseleave",function(){
    $("#navbox7").fadeOut(100);
  });
  });
  
  $(document).ready(function(){
    // Show hide popover
    $("#contest").mouseover(function(){
        $("#navbox8").fadeIn(100);
    });
  });   
  
  $(document).ready(function(){
  $('#contest,#navbox8').on("mouseleave",function(){
    $("#navbox8").fadeOut(100);
  });
  });
  

  

