$(document).ready(function() {
  // MODAL
  var modalText = {
    discover: {
      title: 'Mini Youtube',
      tag: 'Small version of youtube',
      detail:
        'Search youtube videos and watch them ang get simlilar suggestions too',
      link: 'https://github.com/shubhankar-naik/mini-youtube'
    },
    ordering: {
      title: 'Corona Tracker',
      tag: 'Details about Corona Virus',
      detail:
        'Details about Corona Virus on total number of active cases, recovered and deaths globally and country wise.',
      link: 'https://github.com/shubhankar-naik/covid-tracker'
    },
    newrelic: {
      title: 'React Chat App',
      tag: 'No database',
      detail:
        'Chat with friends by creating room id and shar it as there is no database after refreshing or exiting the page the chats will not be recovered after joining the room again',
      link: 'https://github.com/shubhankar-naik/React-Chat-App'
    },
    roambi: {
      title: 'Roambi.com',
      tag: 'BUSINESS ANALYTICS.',
      detail:
        'Roambi provides analytics, reporting, and business intelligence for companies to use on the go. A Wordpress hosted site written in PHP and Javascript with Hubspot Integration.',
      link: 'http://www.roambi.com'
    },
    walker: {
      title: 'Classification',
      tag: 'Bank Classificationfor potential Client',
      detail:
        'To find a potential client who will subscribe to a term deposit on the basis of a given dataset of a bank.',
      link:'https://github.com/shubhankar-naik/Classification'  
    },
    powur: {
      title: 'Cat vs Noncat',
      tag: 'Predict cat',
      detail:
        'Classify whether an image is cat or not using numpy. At the end of the notebook there is a cell where you can enter your images and then classify them as cat or non-cat.',
      link: 'https://github.com/shubhankar-naik/Cat-vs-Noncat'
    },
    mystand: {
      title: '3-D solar System',
      tag: 'Using Vpython',
      detail:
        '3-D visualization and simulation of solar system using Vpython library Download Vpython library using - pip install vpython All the planets and sun radius distance can be manipulated using the constants of the earth specifications given',
      link:"https://github.com/shubhankar-naik/3-D-Solar-System"
    },
    never: {
      title: 'NeverSurrender',
      tag: 'ALS AWARENESS.',
      detail:
        'NeverSurrender is a platform for the new ALS foundation mobile app in hopes to raise awareness and research funding to fight ALS. Pure JavaScript marketing site to promote the new ALS NeverSurrender app.'
    },
    themall: {
      title: 'The Mall',
      tag: 'PEER GUIDED SHOPPING.',
      detail:
        'The Mall is a place to follow the latest fashion purchases of your friends and favorite celebrities. Built with Node.js and Handlebars. Features the ability to import thousands of top brands products into one shopping site.'
    }
  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});
