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
		addItem(value);
	}
}

function addItem(text) {
	let list = document.getElementById('todo');
	let item = document.createElement('li');
	item.innerText = text;
	
	list.insertBefore(item, list.childNodes[0]);
}
