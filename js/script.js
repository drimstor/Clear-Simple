$(document).ready(function(){

// Слайдер

	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
		autoplay:true,
		speed:1000,
		autoplaySpeed:2000,
		// centerMode: true,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});

// Аккордион

	const accordion = document.getElementsByClassName('contentBx');
	for (i = 0; i < accordion.length; i++){
		accordion[i].addEventListener('click', function(){
			this.classList.toggle('active')
		})
	}


// Меню бургер

  $('.header__burger').click(function(event) {
     $('.header__burger,.header__nav').toggleClass('active');
	  
      $('body').toggleClass('lock');
   });
	$('li').on('click', function(){
      $('.header__burger,.header__nav').removeClass('active');
		$('body').removeClass('lock');
    })

// Плавная прокрутка

	 $('a').click(function() {
      var elementClick = $(this).attr('href')
      var destination = $(elementClick).offset().top;
      jQuery('html:not(:animated),body:not(:animated)').animate({
         scrollTop: destination
      }, 800);
      return false;
    })

// Кнопка наверх

	 $(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
		$('.scrollup').fadeIn();
		} else {
		$('.scrollup').fadeOut();
		}
		});
		 
		$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 800);
		return false;
		});



});


 
