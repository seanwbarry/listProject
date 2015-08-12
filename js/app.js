$(document).ready(function () {
	function crossed () {
		$(this).siblings('.listText').toggleClass('listTextCrossed');
		$(this).toggleClass('circleCrossed');
		/*.toggleClass('circle circleCrossed')*/
	}

	function deleteFunction () {
		$(this).closest('.listItem').fadeOut(1000, function() {
			$(this).remove();
		})
	}



	//--------------------


function sortable(rootEl, onUpdate){
    var dragEl, nextEl;
    
    // Делаем всех детей перетаскиваемыми
    [].slice.call(rootEl.children).forEach(function (itemEl){
        itemEl.draggable = true;
    });
    
    // Фнукция отвечающая за сортировку
    function _onDragOver(evt){
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'move';
       
        var target = evt.target;
        if( target && target !== dragEl && target.nodeName == 'LI' ){
            // Сортируем
            rootEl.insertBefore(dragEl, rootEl.children[0] !== target && target.nextSibling || target);
        }
    }
    
    // Окончание сортировки
    function _onDragEnd(evt){
        evt.preventDefault();
       
        dragEl.classList.remove('ghost');
        rootEl.removeEventListener('dragover', _onDragOver, false);
        rootEl.removeEventListener('dragend', _onDragEnd, false);

        if( nextEl !== dragEl.nextSibling ){
            // Сообщаем об окончании сортировки
            onUpdate(dragEl);
        }
    }
    
    // Начало сортировки
    rootEl.addEventListener('dragstart', function (evt){
        dragEl = evt.target; // Запоминаем элемент который будет перемещать
        nextEl = dragEl.nextSibling;
        
        // Ограничиваем тип перетаскивания
        evt.dataTransfer.effectAllowed = 'move';
        evt.dataTransfer.setData('Text', dragEl.textContent);

        // Пописываемся на события при dnd
        rootEl.addEventListener('dragover', _onDragOver, false);
        rootEl.addEventListener('dragend', _onDragEnd, false);

        setTimeout(function (){
            // Если выполнить данное действие без setTimeout, то
            // перетаскиваемый объект, будет иметь этот класс.
            dragEl.classList.add('ghost');
        }, 0)
    }, false);
}

/*                        
// Используем                    
sortable( document.getElementById('list2'), function (){
    console.log(item);
    console.log('asdf');
});
*/
sortable( document.getElementById('simpleList') /*, function (){
    console.log(item);
    console.log('asdf');
}*/);

//----------------------

	function addItem () {
		$('#simpleList').append('<li class="listItem"><div class="circle"></div><p class="listText">' + $('input#addItem').val() + '</p><div class="cross"></div></li>')
		$('.circle').off('click', crossed);
		$('.circle').on('click', crossed);
		$('.cross').off('click', deleteFunction);
		$('.cross').on('click', deleteFunction);
		sortable( document.getElementById('simpleList'));
		/*
			ask Nathan why these are necessary...if at all???
		*/
	}

var length = $('#addItem').val().length;
console.log(length);

	$('.button').click(function() {
		if ($('#addItem').val().trim().length===0) {
			alert('write something in the box!');
		} else {
			addItem();
		}
	});
	$('#addItem').keydown(function () {
		if (event.which === 13) {
			addItem();
		}
	})
	$('.circle').on('click', crossed);
	$('.cross').on('click', deleteFunction);




}); //end of document ready function






/*
plan: 
get strikethrough working - done
get adding item working - done
get deleting item working - done
*********************************
**
**outstanding
**sorting things
**deleting things (and making it work with the existing animation)
http://stackoverflow.com/questions/1391793/how-to-destroy-a-dom-element-with-jquery
**

*********************************
*/



/*
how to get added items to be moveable


*/