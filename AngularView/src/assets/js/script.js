$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox({
    alwaysShowClose: true,
    alwaysShowArrows: true,
    leftArrow: 'GAUCHE',
    rightArrow: '>',

    onShown: function() {
        console.log('Checking our the events huh?');
    },

  });
});

$(document).ready(function() {
  $(document).on("click", ".super-button", function() {
    $(".main, .half, .overlay, .button-line, .super-button").addClass("active");
    setTimeout(function() {
      $(".main *").css({"z-index": "1", "display" : "none"});
    }, 2800);
  });
});
