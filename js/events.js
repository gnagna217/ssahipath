(function($) {
    $(function() {

        /* Global
         *******************************************/
        var $window = $(window);

        // init global settings object
        window.settings = {};

        // store media queries for global use later
        window.settings.mediaQueryLarge = 'only screen and (min-width: 1200px)';
        window.settings.mediaQueryMedium = 'only screen and (min-width: 992px) and (max-width: 1199px)';
        window.settings.mediaQuerySmall = 'only screen and (min-width: 768px) and (max-width: 991px)';
        window.settings.mediaQueryTablet = 'only screen and (max-width: 991px)';
        window.settings.mediaQueryExtraSmall = 'only screen and (max-width: 767px)';
        window.settings.mediaQuerySuperSmall = 'only screen and (max-width: 480px)';

        // store transition settings
        window.settings.defaultAnimationDuration = 300; // in milliseconds

        // set jquery default animation speed
        $.fx.speeds._default = window.settings.defaultAnimationDuration;

        $('a[href="#"]').on('click', function(e) {
            return false;
        });

        // placeholders polyfill
        $('input, textarea').placeholder();

        // update browser modal window
        var updateBrowserModal = $('#modal');

        if (updateBrowserModal.length > 0) {
            $("#hidden_link").fancybox({
                width: 800,
                height: 'auto',
                maxWidth: 800,
                autoSize: false,
                scrolling: 'no',
                padding: 0,
                wrapCSS: 'modal-wrap'
            }).trigger('click');
        }

        $('.modal-wrap').parents('.fancybox-overlay').css({
            'zIndex': 20000
        });

        $('#close-modal').click(function() {
            $.fancybox.close();
        });


        /* Site Header Nav
         *******************************************/
        var $siteHeader = $('#site-header'),
            $servicesList = $('#fixed-buttons'),
            $headerMenuLink = $('#header-menu-link'),
            $body = $('body'),
            $closeButton = $('#close-btn');

        $window.on('scroll.ic-header-nav', function() {
            var scrollTop = $window.scrollTop(),
                triggerPoint = 580;

            if (scrollTop > triggerPoint && !$siteHeader.hasClass('with-bg')) {
                $siteHeader.addClass('with-bg');
                $('#fixed-buttons').show();
            } else if (scrollTop <= triggerPoint && $siteHeader.hasClass('with-bg')) {
                $siteHeader.removeClass('with-bg');
                $('#fixed-buttons').hide();
            }
        }).trigger('scroll.ic-header-nav');

        $headerMenuLink.add($closeButton).click(function() {
            $body.toggleClass('open');
        });

        $("section").click(function() {
        if($("body").hasClass("open")){
        hamburger.classList.toggle("fa-navicon");
        hamburger.classList.toggle("fa-times");
        $("body").toggleClass("open");
        }
        });

        var hamburger = document.querySelector(".hamburger");
        if(hamburger != undefined && hamburger != null){
        hamburger.addEventListener("click", function() {
          hamburger.classList.toggle("fa-navicon");
          hamburger.classList.toggle("fa-times");
        });
        }

        var eSelect = document.getElementById('selectservice');
        if(eSelect != null && eSelect != undefined){
        eSelect.onchange = function() {
        var val = $(this).val();
        if(val != "service"){
        window.open(val, "_self");
        }
        }
        };

        /* Team*/
      $( ".at-column" ).mouseleave(function() {
        //console.log("mouseout");
        $(this).find(".at-social").hide();
        $(this).find(".at-user__title").css('color','initial');

        $(this).find(".at-user").css('background-color','initial');
        $(this).find(".at-user__title").hide();
          $(this).find(".at-user__name").hide();
      });

  
        function hasTouch() {
            return 'ontouchstart' in document.documentElement
                   || navigator.maxTouchPoints > 0
                   || navigator.msMaxTouchPoints > 0;
        }
        if(!hasTouch()){
          //console.log("no touch");
          $(".at-column").hover(function() {
            //console.log("hovered column");
              $(this).find(".at-social").show();
              $(this).find(".at-user__title").show();
              $(this).find(".at-user__name").show();
              $(this).find(".at-user__title").css('color','white');
              $(this).find(".at-user").css('background-color','#c1ad57');
            }, function() {
                  //$(this).css('background', ceColorOri);
                  //$(this).css('border-color', "white");
            });
        }

        $( ".at-column" ).click(function() {
        //console.log("clicked");
        var who = $(this).attr("data-who");
        var html = $(this).find(".at-social").html();
        var img = $(this).find(".at-user__avatar").html();
        var title = "<h2 style='text-align:center'>" + $(this).find(".at-user__name").html() + "</h2><br/>";
        //console.log("html: " + html);
        $(".showText").html("<a href='#"+who+"'><span class='fa fa-chevron-up return' title='back up'></span></a><div class='at-user__avatar at-user__avatarText'>" + img + "</div>" + title + html);
        $(".showText").show();
        $(window).scrollTop($('.showText').offset().top - 300).scrollLeft($('.showText').offset().left);
        });

        /* Page Header Background
         *******************************************/

        // If mobile make home background an image
        if (Modernizr.touch) {
            $('.video-bg').addClass('bg-image');
        }

        var $pageHeader = $('.page-header'),
            $bgImage = $pageHeader.find('.bg-image');


        $window.on('resize.page-header', function() {
            var headerWidth = $pageHeader.outerWidth(),
                headerHeight = $pageHeader.outerHeight() + 1;

            $bgImage.css({
                width: headerWidth,
                height: headerHeight
            });
        }).trigger('resize.page-header');

        /* Continue buttons
         *******************************************/
        var $continueButtons = $('.btn-continue-arrow'),
            $sections = $('section');

        $continueButtons.on('click', function() {
            var $target = $(this),
                sectionIndex = $sections.index($(this).parents('section')),
                scrollTarget = $sections.get(sectionIndex + 1);

            $.scrollTo(scrollTarget, 500);
        });

        /* Select 2
         *******************************************/
        $('.select2').select2({
            minimumResultsForSearch: -1
        }).on('select2-open', function() {
            var $select2Results = $('.select2-results');
            $select2Results.perfectScrollbar({
                suppressScrollX: true
            });
        }).on('select2-close', function() {
            var $select2Results = $('.select2-results');
            $select2Results.perfectScrollbar('destroy');
        });

        /* Programs Slider
         *******************************************/
        var $programsSlider = $('.programs-slider'),
            $programs = $programsSlider.find('.program');

        $programs.on('mouseenter', function() {
            var index = $programs.index(this) + 1;
            $programsSlider.addClass('program' + index);
        });

        $programs.on('mouseleave', function() {
            var index = $programs.index(this) + 1;
            $programsSlider.removeClass('program' + index);
        });

        /* Responsive images
         *******************************************/
        new Imager('.delayed-image-load', {
            availablePixelRatios: [1, 2]
        })

        /* Fancybox
         *******************************************/
        $fancyboxVideos = $('.fancybox.video');

        if ($fancyboxVideos.length > 0) {
            $('.fancybox.video').fancybox({
                closeEffect: 'none',
                helpers: {
                    media: {}
                },
                scrolling: 'no',
                width: 800,
                height: 450,
                maxWidth: 800,
                maxHeight: 450,
                aspectRatio: true,
                autoSize: false
            });
        }

        /* Main Nav Scrollbar
         *******************************************/
        var $pushMenu = $('.push-menu'),
            $scrollContainer = $pushMenu.children('.menu-scroll-container'),
            scrollbarInitialized;

        $window.on('resize.ic-menu', function() {
            // update height
            $scrollContainer.css('height', $window.height());

            if (!scrollbarInitialized) {
                scrollbarInitialized = true;
                $scrollContainer.perfectScrollbar({
                    suppressScrollX: true
                });
            } else {
                $scrollContainer.perfectScrollbar('update');
            }
        }).trigger('resize.ic-menu');

        /* Add correct data to FB share
         ******************************************
        window.fbAsyncInit = function() {
            FB.init({
                appId: '325146157507863',
                xfbml: true,
                version: 'v2.0'
            });
        };
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        function postToFeed(title, desc, url, image) {
            var obj = {
                method: 'share',
                href: url,
                picture: image,
                name: title,
                description: desc
            };

            function callback(response) {}
            FB.ui(obj, callback);
        }

        $('.facebook.share').click(function() {
            elem = $(this);
            _gaq.push(['_trackEvent', 'Social buttons', 'click', 'Facebook Share']);
            postToFeed(elem.data('title'), elem.data('desc'), elem.prop('href'), elem.data('image'));

            return false;
        });*/

        /* Add event analytics
         *******************************************/
        /*$('.twitter.share').on('click', function() {
            _gaq.push(['_trackEvent', 'Social buttons', 'click', 'Twitter Share']);
        });

        $('.google-plus.share').on('click', function() {
            _gaq.push(['_trackEvent', 'Social buttons', 'click', 'Twitter Share']);
            window.open(this.href, '', 'menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600');
            return false;
        });

        $('#fixed-donate').on('click', function() {
            _gaq.push(['_trackEvent', 'Fixed Donate Button', 'click']);
        });

        //  avoid widows
        $('p:not(.widowIgnore, #subscribe-email, #subscribe-submit), .header .subheader:not(.widowIgnore)').widowFix();
        */

    });
})(jQuery);

      function ValidatePassKey(tb) {
            console.log("tabbing: " + tb.TextLength);
          if (tb.TextLength == 3){
            document.getElementById(tb.id + 1).focus();
          }
        }