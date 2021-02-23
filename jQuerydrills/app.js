// $(document).ready(function(){

// });


// $(':btnSubmit')

// $('.btnSubmit').click(function () { 
//     $(this).alert("this button is working");
// });
$('#btnSubmit').click(() => alert('Clicked!'));

$('#btnSubmit').click(() => alert($('input[type="text"]').val()));

$('input[type="text"]').keyup(function() {
	if($(this).val().length > 0){
		$('#btnSubmit').prop('disabled', false);
	} else {
		$('#btnSubmit').prop('disabled', true);
	}
}).trigger('keyup');

let ul = $('<ul></ul>');
$('body').append(ul);

$('form').submit(function(e) { 
	e.preventDefault();
	let userInput = $('input[type="text"]').val();
	$('ul').append(`<li>${userInput}</li>`);
	$('li').click(function() {
		let red = Math.floor(Math.random() * 255);
		let green = Math.floor(Math.random() * 255);
		let blue = Math.floor(Math.random() * 255);
		let randomColor = `rgb(${red}, ${green}, ${blue})`;
		$(this).css('color', randomColor);
	});
	$('li').dblclick(function() {
		$(this).remove();
	});
});