(function($) {
    $(function() {
        var $window = $(window);
        window.settings = {};
        window.settings.mediaQueryLarge = 'only screen and (min-width: 1200px)';
        window.settings.mediaQueryMedium = 'only screen and (min-width: 992px) and (max-width: 1199px)';
        window.settings.mediaQuerySmall = 'only screen and (min-width: 768px) and (max-width: 991px)';
        window.settings.mediaQueryTablet = 'only screen and (max-width: 991px)';
        window.settings.mediaQueryExtraSmall = 'only screen and (max-width: 767px)';
        window.settings.mediaQuerySuperSmall = 'only screen and (max-width: 480px)';
        window.settings.defaultAnimationDuration = 300;
        $.fx.speeds._default = window.settings.defaultAnimationDuration;

        $('a[href="#"]').on('click', function(e) {
            return false;
        });

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
          $(".at-column").hover(function() {
              $(this).find(".at-social").show();
              $(this).find(".at-user__title").show();
              $(this).find(".at-user__name").show();
              $(this).find(".at-user__title").css('color','white');
              $(this).find(".at-user").css('background-color','#c1ad57');
            }, function() {

            });
        } else {
            $( ".at-column" ).click(function() {
                var who = $(this).attr("data-who");
                var html = $(this).find(".at-social").html();
                var img = $(this).find(".at-user__avatar").html();
                var title = "<h2 style='text-align:center'>" + $(this).find(".at-user__name").html() + "</h2><br/>";
                $(".showText").html("<a href='#"+who+"'><span class='fa fa-chevron-up return animated flash infinite delayanim' title='back up'></span></a><div class='at-user__avatar at-user__avatarText'>" + img + "</div>" + title + html);
                $(".showText").show();
                $(window).scrollTop($('.showText').offset().top - 300).scrollLeft($('.showText').offset().left);
            });
        }


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

    });
})(jQuery);