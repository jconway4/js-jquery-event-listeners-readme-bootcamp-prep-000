//define functions here
getIt = function(){
  $('p').on('click', function() {
    alert('Hey!');
  });
};

frameIt = function(){
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
};

pressIt = function() {
  $('form').on('keydown', function(key) {
    if (key.which == 71) {
      
    }
  });
};

$(document).ready(function(){

// call functions here

});
