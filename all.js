console.log('1');
$(document).ready(function () {
  // $('h1').hide();
  // $('#title').hide();

  $('#title').click(function (e) {
    // $('p').hide();
    // $('p').toggle();

    // $('p').slideToggle(2000);

    // $('p').fadeToggle(2000);
    // $('div').toggle();
    // $('p').addClass('orange');
    $('p').toggleClass('orange');

    $('body').html('<h1 class="ddd">XXXX</h1>');
  });

  
});

console.log('2');
