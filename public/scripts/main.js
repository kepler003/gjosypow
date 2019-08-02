


// CLEAR INPUT //////////////////////////////////////////
function clearInput(elements, value){
  var elementsArr = elements.split(', ');
  var valueArr = value.split(', ');
  for(var i = 0; i < elementsArr.length; i++){
    if(value){
      $(elementsArr[i]).val(valueArr[i]);
    } else {
      $(elementsArr[i]).val('');
    };
  };
};




// MANIPULATE CLASSES //////////////////////////////////////////
function toggleClass(elements, classes){
  var elementsArr = elements.split(', ');
  var classesArr = classes.split(', ');

  for(var i = 0; i < elementsArr.length; i++){
    $(elementsArr[i]).toggleClass(classesArr[i]);
  };
};

function addClass(elements, classes){
  var elementsArr = elements.split(', ');
  var classesArr = classes.split(', ');
  
  for(var i = 0; i < elementsArr.length; i++){
    $(elementsArr[i]).addClass(classesArr[i]);
  };
};

function removeClass(elements, classes){
  var elementsArr = elements.split(', ');
  var classesArr = classes.split(', ');

  for(var i = 0; i < elementsArr.length; i++){
    $(elementsArr[i]).removeClass(classesArr[i]);
  };
};





// FOCUS ON AN ELEMENT //////////////////////////////////////////
function focusOnElement(element){
  $(element).focus();
};





// MANIPULATE DISPLAY //////////////////////////////////////////

function changeDisplay(targets, type, duration){
  // Get targets, types and durations
  var targetsArr = targets.split(", ");
  var typeArr = type.split(", ");
  var durationArr = duration.split(", ");
  
  // Loop through targets
  for(var i = 0; i < targetsArr.length; i++){

    switch (typeArr[i]){
      case "show": {
        $(targetsArr[i]).stop().show(parseInt(durationArr[i]));
      }
      break;
      
      case "hide": {
        $(targetsArr[i]).stop().hide(parseInt(durationArr[i]));
      }
      break;

      case "slideToggle": {
        $(targetsArr[i]).stop().slideToggle(parseInt(durationArr[i]));
      }
      break;

      case "slideUp": {
        $(targetsArr[i]).stop().slideUp(parseInt(durationArr[i]));
      }
      break;

      case "slideDown": {
        $(targetsArr[i]).stop().slideDown(parseInt(durationArr[i]));
      }
      break;

      case "fadeToggle": {
        $(targetsArr[i]).stop().fadeToggle(parseInt(durationArr[i]));
      }
      break;

      case "fadeIn": {
        $(targetsArr[i]).stop().fadeIn(parseInt(durationArr[i]));
      }
      break;

      case "fadeOut": {
        $(targetsArr[i]).stop().fadeOut(parseInt(durationArr[i]));
      }
      break;
    };
  };
};





// SCROLL TO ELEMENT //////////////////////////////////////////

function scrollToElement(targets, top, duration){
  // Get targets, types and durations
  var targetsArr = targets.split(", ");
  var durationArr = duration.split(", ");
  var topArr = top.split(", ");
  for(var i = 0; i < targetsArr.length; i++){
    $('html, body').animate({
      scrollTop: $(targetsArr[i]).offset().top - topArr[i]
    }, durationArr[i]);
  };
};

function scrollToBottom(elements, bottom, duration){
  // Get targets, types and durations
  var elementsArr = elements.split(", ");
  var durationArr = duration.split(", ");
  var bottomArr = bottom.split(", ");
  for(var i = 0; i < elementsArr.length; i++){
    $(elementsArr[i]).scrollTop($(elementsArr[i]).height());
  };
}









//////////////////////////////////////////////////////// SCRIPTS RELATED TO THIS PROJECT

// Show/hide go-to-top btn
$(window).on('scroll resize orientationchange', function(){

  let btn = $('.btn--go-top');

  if($(window).scrollTop() > 0){
    
    $(btn).addClass('active');
    $('.main__side-nav__ul__li__btn--up').addClass('active');

  } else {

    $(btn).removeClass('active');
    $('.main__side-nav__ul__li__btn--up').removeClass('active');
  };
});



// Change styling of side nav menu btns
$(window).on('scroll resize orientationchange', function(){

  // Hide/show side nav menu on desktop
  if($(window).scrollTop() > 0){

    $('.main__side-nav').addClass('active');

  } else {

    $('.main__side-nav').removeClass('active');
  };

  // Get main articles
  let articles = $('.main__article--content');

  // Loop through articles
  for(let article of articles){
    
    // If article is now viewed
    if($(article).offset().top - $(window).scrollTop() > -$(article).outerHeight() + 200
      && $(article).offset().top - $(window).scrollTop() <= 200){

      let id = $(article).attr('id');

      $('.main__side-nav__ul__li__btn').not($('.main__side-nav__ul__li__btn--up')).removeClass('active');
      $('.main__side-nav__ul__li__btn--' + id).addClass('active');

      break;
      
    // if article is not viewed
    } else if($(article).offset().top - $(window).scrollTop() > 200){
      
      $('.main__side-nav__ul__li__btn').not($('.main__side-nav__ul__li__btn--up')).removeClass('active');
    };
  };
});




//////////////////////////////////////////////////////// AJAX

$('.btn--send-email').click( function(){

  $.ajax({
    url: '/email',
    method: 'POST',
    dataType: 'json',
    data: {email: $('#email').val(), subject: $('#subject').val(), message: $('#message').val()},
    success: async function(response){

      let act = async () => {

        // Clear form inputs
        $('#email, #subject, #message').val('');

        // If response type == success
        if(response.type == "success"){

          $('.box--notifications').removeClass('error').addClass('active success');
          $('.box--notifications p.message').text(response.message);
        
          // If error
        } else if(response.type == "error"){

          $('.box--notifications').removeClass('success').addClass('active error');
          $('.box--notifications p.message').text(response.message);
        };
        
        // Define duraition (time to hide notifictions)
        let duration;
        if(response.type == "success"){
          duration = 3000;
        } else if(response.type == "error"){
          duration = 5000;
        };

        // Hide notification box after duration
        setTimeout(function(){
          $('.box--notifications').removeClass('active');
        }, duration);
      };



      await act();
    },
    error: function(e){

      // Console log error
      console.log(e);
    }
  });
});
