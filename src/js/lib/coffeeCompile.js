(function() {
  'use-strict';
  $(document).ready(function() {
    $('.disable-anchors a').click(function(e) {
      e.preventDefault();
    });
    $('[data-href]').click(function(e) {
      var lastPath, locationArr, mainPath, pathObj;
      locationArr = window.location.pathname.split('/');
      lastPath = locationArr[locationArr.length - 1];
      mainPath = locationArr[locationArr.length - 2];
      pathObj = {};
      pathObj[mainPath] = lastPath;
      window.history.pushState(pathObj, '', lastPath);
      document.location.replace($(this).data('href'));
    });
    transformicons.add('.tcon');
  });

}).call(this);

(function() {
  'use-strict';
  $(document).ready(function() {
    var scrollToController;
    scrollToController = new ScrollMagic();
    scrollToController.scrollTo(function(newpos) {
      TweenMax.to(window, 0.5, {
        scrollTo: {
          y: newpos
        }
      });
    });
    $(document).on('click', 'a[href^=#]', function(e) {
      var id;
      id = $(this).attr('href');
      if ($(id).length > 0 && !id.match(/nav/g) && !id.match(/carousel/g)) {
        e.preventDefault();
        scrollToController.scrollTo(id);
      }
    });
  });

}).call(this);

(function() {
  $(document).ready(function() {
    var $applyScene, $sectionScroll, $sectionScrollContent, $sectionScrollController, $sectionScrollList, cleanupSpecialCharacters, scrollDownRef;
    $sectionScroll = $('body #section-scroll');
    $sectionScrollList = $('body #section-scroll ul');
    $sectionScrollContent = $('[data-section-scroll]');
    cleanupSpecialCharacters = function(str) {
      str = str.replace(/[ÀÁÂÃÄÅ]/g, 'A');
      str = str.replace(/[àáâãäå]/g, 'a');
      str = str.replace(/[ÈÉÊË]/g, 'E');
      str = str.replace(/[é]/g, 'e');
      str = str.replace(/[Í]/g, 'I');
      str = str.replace(/[í]/g, 'i');
      str = str.replace(/[Ú]/g, 'U');
      str = str.replace(/[ú]/g, 'u');
      str = str.replace(/[Ó]/g, 'O');
      str = str.replace(/[ó]/g, 'o');
      return str.replace(/[^a-z0-9]/gi, '');
    };
    $sectionScrollController = new ScrollMagic();
    scrollDownRef = [];
    $.each($sectionScrollContent, function(index, item) {
      var $sectionScrollScene, idGen, scrollRef, sectionData, sectionList, triggerRef;
      triggerRef = '.section-scroll-' + index;
      sectionData = $(item).data('section-scroll');
      idGen = sectionData.toString().toLowerCase();
      idGen = cleanupSpecialCharacters(idGen);
      idGen = idGen.split(' ').join('-');
      scrollRef = '.scroll-ref-' + index;
      $(item).addClass('section-scroll-' + index);
      $(item).attr('id', idGen);
      scrollDownRef.push(idGen);
      sectionList = '<li><a href="#' + idGen + '"' + 'class="animated bounceInRight ad-' + (index * 2) + ' scroll-ref-' + index + ' atm-scroll-item">' + sectionData + '</a></li>';
      $sectionScrollList.append(sectionList);
      $sectionScrollScene = new ScrollScene({
        triggerHook: 'onLeave',
        triggerElement: triggerRef,
        duration: $(item).height()
      }).setClassToggle(scrollRef, 'active').addTo($sectionScrollController);
    });
    $sectionScrollList.find('li:first-child a').addClass('active');
    scrollDownRef.shift();
    $.each($sectionScrollContent, function(index, item) {
      var idRef, scrollDownAnchor;
      idRef = scrollDownRef.shift();
      scrollDownAnchor = '<a class="scroll-down scroll-down-sq size lg"' + 'href="#' + idRef + '"' + 'rel="nofollow">' + 'down' + '</a>';
      if (idRef !== void 0) {
        $(item).append(scrollDownAnchor);
      }
    });
    $applyScene = new ScrollScene({
      triggerHook: 'onEnter',
      triggerElement: '.section-scroll-3'
    }).addTo($sectionScrollController);
    $applyScene.on('enter', function(e) {
      $('.btn-apply').addClass('bounceInRight');
    });
  });

}).call(this);
