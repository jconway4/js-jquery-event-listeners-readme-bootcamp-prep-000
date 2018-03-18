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

submitIt = function() {
  
};

$(document).ready(function(){

// call functions here

});
