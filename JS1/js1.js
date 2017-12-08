function handleKeyPress(e) {
	if (e.keyCode === 13) {
		e.preventDefault();
		addToList();
	}
}

function addToList() {
	let value = document.getElementById('item').value;
	
	if (value) {
		console.log(value);
		document.getElementById('item').value = '';
	}
}
