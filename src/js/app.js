  $(document).ready(function(){
     // --- Modify the text Property on the div with the id "content"  when the button bt2 is clicked
     $('#bt1').click(function(){
         alert("Hi JQuery, I'm a live!!");
     });

    
     // --- Modify the text Property on the div with the id "content"  when the button bt2 is clicked
     $('#bt2').click(function(){
        $('#content').text('Text added by trigering the click over the bt2.');
     });

     // --- Modify the text property on the div to clear its content to NULL
     $('#bt3').click(function(){
         $('#content').text('');
     });
    
     // -- Create a new counter with twoe buttons add ++ && minus --
     var c = 0;
     $('#add').click(function(){
         $('#count').text(++c);
     });

     $('#minus').click(function(){
          $('#count').text(--c);
     });
     
     $('#countAlert').click(function(){
   
        alert($('#counting').text());
     });

  });
  // --- To do the same with ES6/ES7/ even ES9 ??

