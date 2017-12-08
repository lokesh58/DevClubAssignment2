function handleKeyPress(e) {
	if (e.keyCode === 13) {
		e.preventDefault();
		addToList();
	}
}

function addToList() {
	let value = document.getElementById('item').value;
	
	if (value) {
		//console.log(value);
		document.getElementById('item').value = '';
		addItem(value);
	}
}

function completeItem() {
	let item = this;
	let parent = item.parentNode;
	let id = parent.id;
	let target = (id == 'todo' ? document.getElementById('completed') : document.getElementById('todo'));
	
	//console.log(parent.id);
	
	parent.removeChild(item);
	target.insertBefore(item, target.childNodes[0]);
}

function addItem(text) {
	let list = document.getElementById('todo');
	let item = document.createElement('li');
	item.innerText = text;
	
	item.addEventListener('click', completeItem);
	
	list.insertBefore(item, list.childNodes[0]);
}
