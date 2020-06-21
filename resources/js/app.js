
var todoList = [];
let $ul = $('ul');
//Adding Todo

$("input").on("keypress", function(e) {
if(e.keyCode === 13) {
	var todo = $(this).val();
	$ul.append($('<li><span><i class="far fa-trash-alt"></i></span> ' + todo +' </li>'));
	todoList.push(todo);
	var todo = $(this).val("");
	}
});
		

//chaning Li CSS on click


$('ul').on("click", "li", function(e) {
	$(this).toggleClass("completed");
});

//Deleting Todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$('.fa-plus').click(function () {
	$('input').fadeToggle();
})
