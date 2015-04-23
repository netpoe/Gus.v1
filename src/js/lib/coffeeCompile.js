(function() {
  'use-strict';
  $(document).ready(function() {
    var $contentDisplayWrapper, $contentItemsWrapper, $globalIdRef;
    $contentDisplayWrapper = $('.content-items-display-wrapper');
    $contentItemsWrapper = $('.content-items-wrapper');
    $globalIdRef = '';
    $('.content-item').click(function(e) {
      var idRef;
      e.preventDefault();
      $(this).addClass('active');
      idRef = $(this).attr('href');
      console.log($globalIdRef);
      if ($contentDisplayWrapper.hasClass('display-content')) {
        $contentDisplayWrapper.removeClass($globalIdRef);
        $('.content-items-wrapper [href=#' + $globalIdRef + ']').removeClass('active');
        $globalIdRef = idRef.slice(1);
        $contentDisplayWrapper.addClass($globalIdRef);
      } else {
        $globalIdRef = idRef.slice(1);
        $contentDisplayWrapper.addClass($globalIdRef);
        $contentDisplayWrapper.addClass('display-content');
        $contentItemsWrapper.addClass('displaying-content');
      }
    });
    $('.content-display-close').on('click', 'a', function(e) {
      e.preventDefault();
      $('.content-item').removeClass('active');
      $contentDisplayWrapper.removeClass('display-content');
      $contentItemsWrapper.removeClass('displaying-content');
      $contentDisplayWrapper.removeClass($globalIdRef);
    });
  });

}).call(this);
