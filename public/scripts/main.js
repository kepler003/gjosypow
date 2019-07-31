


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
$(window).on('scroll resize orientationchange', function(){

  let btn = $('.btn--go-top');

  if($(window).scrollTop() > 0){
    
    $(btn).addClass('active');

  } else {

    $(btn).removeClass('active');
  };
});

