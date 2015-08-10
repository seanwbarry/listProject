$(document).ready(function () {
	function crossed () {
		$(this).siblings('.listText').toggleClass('listTextCrossed');
		$(this).toggleClass('circleCrossed');

		/*.toggleClass('circle circleCrossed')*/
		console.log('clicked p');
	}

	function deleteFunction () {
		$(this).closest('.listItem').fadeOut(300);
		/*
		want to make this delete as well
		*/
		console.log('asdf')
	}

	$('.button').click(function () {
		$('ul').append('<li class="listItem"><div class="circle"></div><p class="listText">' + $('input#addItem').val() + '</p><div class="cross"></div></li>')
		$('.circle').off('click', crossed);
		$('.circle').on('click', crossed);
		$('.cross').off('click', deleteFunction);
		$('.cross').on('click', deleteFunction);
		console.log('clicked asdf');
	});

	$('.circle').on('click', crossed);
	$('.cross').on('click', deleteFunction);
	

});






/*
plan: 
get strikethrough working
get adding item working
get deleting item working

*/