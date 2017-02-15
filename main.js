//IIFE  immediately invoked function;
(function() {
  var plumber = "mario";
  var princess = "peach";

  function scopeContainer() {
    var innerVariable = "bob the builder";
    console.log(innerVariable+ " inside");
    console.log(plumber + " inside");
  }
  scopeContainer();
  //console.log(innerVariable + " outside"); cannot access the innerVariable declared in scopeContainer.

  console.log(plumber + " outside");

  //vanilla javascript way of grabbing an element and changing its properties.
  var header = document.querySelector('header');
  console.log(header);
  console.log(header.innerHTML);
  console.log(header.textContent);

  header.innerHTML = "<h3>Less Fancy on my Title</h3>";

  //using jquery to grab the <section> elements on the page. and update their html.
  $('section').html("<div class='box'>4</div>");
  //using jquery to grab all elements with the class box on the page and update their background color to blue.
  $('.box').css('background-color', 'blue');

  //store a jquery selected element to a variable.
  var findMe = $('body').find('#find-me');

  //add event listener on click to the button elements on the page.
  $('button').on('click', function() {
     console.log('Hello! you clicked a button');
     $('.box').css({
       backgroundColor : 'yellow',
       fontSize: "3em",
       color: "white",
       height: "600px"
     });

     //use variable storing jquery selector to update the text of the element and the css.
     findMe.text('someone clicked a button');
     findMe.css({ color: 'purple'});
  });

  //add event listener on mouseover to the elements with the class of box on the page.
  $('.box').on('mouseover', function () {
    let color = $(this).attr('data-color');
    $(this).siblings('.box').css({backgroundColor: color});
  });
}());
