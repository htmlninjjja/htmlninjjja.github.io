
// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const darkBg = document.querySelector('.dark-background');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		darkBg.classList.toggle('_active');
	});
}


// Скролл верхнего меню
$(window).on('scroll', function ()  {
	
	if ($(window).scrollTop() > 150) 
	{
	  $('header').addClass('fixed');
	  //$('.page-header').addClass('hide-header');
	} 
	else 
	{
	  $('header').removeClass('fixed');
	  //$('.page-header').removeClass('hide-header');
	}
  });