$(document).ready(function () {
	for(let i = 0; i < document.forms.length; i++){
		if(document.forms[i].name === "answer-form"){
			document.forms[i].addEventListener("submit", function(event) {
			  	event.preventDefault();
			  	let data = new FormData(document.forms[i]);
			  	let values = [...data.values()];
			  	if(values[0].length < 5){
			  		error("Сообщение слишком короткое!");
				}else{
				  	console.log(values[1]+" says "+values[0]+" on "+values[2]);
				  	success(); 
			  	}
	  		});
		}
	}
});

function success() {
  Swal.fire({
	icon: 'success',
	timer: 1000,
    title: 'Сообщение успешно отправлено!'
  })
}

function error(text) {
  Swal.fire({
	  icon: 'error',
	  title: 'Ошибка',
	  timer: 1000,
	  text: text
	})
}