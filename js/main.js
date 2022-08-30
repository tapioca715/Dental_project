$(document).ready(function () {
  const swiper = new Swiper('#main-visual .swiper', {

    autoplay: {
      delay: 3000,
    },

    direction: 'horizontal',  // 효과
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
})


$(document).ready(function () {
  const swiper = new Swiper('#main-visual-mobile .swiper-container', {

    autoplay: {
      delay: 3000,
    },

    direction: 'horizontal',  // 효과
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });
})

// 이미지 및 콘텐츠 로딩 체크
window.onload = function () {
  // AOS 초기화
  AOS.init();
}

let vw = document.documentElement.clientWidth;
if (vw > 768) {
  $(function () {
    $(window).scroll(function () {
      var scrollPosition = $(window).scrollTop();
      if (scrollPosition >= 500) {
        $('#fixed-menu').stop().fadeIn();
      } else {
        $('#fixed-menu').stop().fadeOut();
      }
    });
  });

  // 2단 메뉴 슬라이드
  $(function () {
    $('header nav .depth1 li').hover(
      function () {
        $(this).find('.depth2').addClass('on');
      },
      function () {
        $(this).find('.depth2').removeClass('on');
      });
  });

  //   gnb toggle
  $(function () {
    $('.gnb-toggle').click(function () {
      // $('#gnb').css('display','block');
      $('#gnb').slideDown();
    });
    $('.gnb-close').click(function () {
      // $('#gnb').css('display','none');
      $('#gnb').slideUp();
    });



    // info 
    $('#info .info_container .tab_doctor').click(function () {
      $('#info .info_container .tab_doctor').addClass('on');
      $('#info .info_container .tab_clinic').removeClass('on');
    });
    $('#info .info_container .tab_clinic').click(function () {
      $('#info .info_container .tab_doctor').removeClass('on');
      $('#info .info_container .tab_clinic').addClass('on');
    });




  });


  //  info scrollclinic()
  function scrollclinic() {
    window.scrollTo(0, 500);
  }


  function scrolldoctor() {
    window.scrollTo(0, 1300);
  }
}