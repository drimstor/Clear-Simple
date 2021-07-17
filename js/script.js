$(document).ready(function(){
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
	const accordion = document.getElementsByClassName('contentBx');
	for (i = 0; i < accordion.length; i++){
		accordion[i].addEventListener('click', function(){
			this.classList.toggle('active')
		})
	}




  $('.header__burger').click(function(event) {
     $('.header__burger,.header__nav').toggleClass('active');
	  
      $('body').toggleClass('lock');
   });
	$('li').on('click', function(){
      $('.header__burger,.header__nav').removeClass('active');
		$('body').removeClass('lock');
    })



});


 
