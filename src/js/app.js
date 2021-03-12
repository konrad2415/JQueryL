  $('document').ready(function(){ // -- This is the JQuery wrapper to the active code
  
     // --- Initialise el valor del campo de texto
     $('#someData').val('Campo de texto');
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
  	  let c = 0;
  	  $('#count').text(0);
  	  
  	  $('#add').click(function(){
  	  	  $('#count').text(++c);
  	  });
  	  
  	  $('#minus').click(function(){
  	  	  $('#count').text(--c);
  	  });
  	  
  	  
  	  $('#countAlert').click(function(){
  	  	 // Use ternary Operator as an advanced topic to test on Js
  	    	//(($('#count').text())=== '0') ?alert( ' Nothing to be showed '): alert("CounterStats:  "+$('#count').text());
  	  	    alert( ($('#count')) )
        });
        

    // --- Handling input text
    $('#valLoader').click(function(){
        alert($('#someData').val());
    });

    $('#altSelected').click(function(){
        alert($('#sel').val());
    });

//--------------------------------------------------------------------------------------------------
	// --- Working with checkbox status
    
    /*
	$('#inputA').click(function(){
			  if($('#inputA').is(':checked')){
				//alert('Button checked.');
				$('#labelA').addClass('lineThrough');
			  } 
			  else {
					   //alert('Control i unchecked.');
					   $('#labelA').removeClass('lineThrough');
					}
	});

   */
	/*  // --- handle all checked labels
	  // ----- >> Esta idea no esta del todo mal pero va en un sentido erroneo.. lo ideal es que se capture el instante enn  que el
	   // ----- >> checkbox es selected / y el instante en que el checkbox es unselected y ejecutar una funcion anonima para cada caso particular...
	     // ----->> con este codigo no es posible cumpplir este requisito pero ayuda a sentar las bases necesarias...
	   //let x = $('input:checkbox'); // Save all DOM nodes on a variable 
	   //console.log(x);              // Show the nodes on the console
		  let xC = $('input:checkbox:checked');
		//	console.log(xC);
			
			$('#in:checked').each( 
              function () {
				  //console.log($(this).val());
				  let labelId='#'+$(this).val();
					//console.log($(labelId).text());
					$(labelId).addClass('lineThrough');
			  }
			); 
			*/
// ------------------------------------------------------------------------------------------------------------------------------------------
    $('input:checkbox').on('change',function (){
      if($(this).is(':checked')){
		let labelId='#'+$(this).val();
		 // console.log($(labelId).text());
		   $(labelId).addClass('lineThrough');
	  }else{
		let labelId='#'+$(this).val();  
		 // console.log($(labelId).text());
		  $(labelId).removeClass('lineThrough');
	  }
    
	});
// ------------------------------------------------------------------------------------------------------------------------------------------	

     let cssHover = {'color':'white', 'background-color':'red'} ;
        let cssOut   = {'color':'black', 'background-color':'white'} ;
		$('p').css('text-align', 'justify');
		$('p').hover(
			function(){$(this).css(cssHover)}, 
			function(){$(this).css(cssOut)}
		);  
  });