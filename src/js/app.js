  $('document').ready(function(){ // -- This is the JQuery wrapper to the active code

  	 // --- Use a # selector to bind a click event to thee button with id="bt1" to run an Alert
  	  $('#bt1').click(function(){
  	  	 alert("Here I'm a live!!");
  	  });
  	  
  	  // --- Use a . selector to caught a node on the DOM by its className
  	  $('.bt2').click(function(){
  	  	 $('#content').text("Here is a text addded when the click trigered the button bt2.")
  	  });
  	  
  	  $('#clearDiv').click(function(){
  	  	  $('#content').text('');
  	  });
  	  var c = 0;
  	  $('#count').text(0);
  	  
  	  $('#add').click(function(){
  	  	  $('#count').text(++c);
  	  });
  	  
  	  $('#minus').click(function(){
  	  	  $('#count').text(--c);
  	  });
  	  
  	  
  	  $('#countAlert').click(function(){
  	  	 // Use ternary Operator as an advanced topic to test on Js
  	    	(($('#count').text())=== '0') ?alert( ' Nothing to be showed '): alert("CounterStats:  "+$('#count').text());
  	  	
  	  });
  });