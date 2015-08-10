$(document).ready(function () {
	function crossed () {
		$(this).siblings('.listText').toggleClass('listTextCrossed');
		$(this).toggleClass('circleCrossed');

		/*.toggleClass('circle circleCrossed')*/
		console.log('clicked p');
	}


	$('.button').click(function () {
		$('ul').append('<li class="listItem"><div class="circle"></div><p class="listText">' + $('input#addItem').val() + '</p><div class="cross"></div></li>')
		$('.circle').off('click', crossed);
		$('.circle').on('click', crossed);
		console.log('clicked asdf');
	});

	$('.circle').on('click', crossed);
	
	$('.cross').on('click', function () {
		$(this).closest('.listItem').fadeOut(300);
		/*
		want to make this delete as well
		*/
		console.log('asdf')
	});

});






/*
plan: 
get strikethrough working
get adding item working
get deleting item working

*/