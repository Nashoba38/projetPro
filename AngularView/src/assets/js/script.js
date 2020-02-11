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
