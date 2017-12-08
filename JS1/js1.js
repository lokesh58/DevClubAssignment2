const del = '<button onclick="removeItem(event, this)"><img src="./delete.png" alt="delete"></button>';
const edit = '<button onclick="editItem(event, this)"><img src="./edit.svg" alt="edit"></button>';

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

function removeItem(e, it) {
	e.stopPropagation();
	let item = it.parentNode.parentNode;
	let parent = item.parentNode;
	//console.log(parent.id);
	
	parent.removeChild(item);
	//console.log("removed");
}

function editor(e, it) {
	if (e.keyCode === 13) {
		let item = it.parentNode;
		let text = it.value;
		item.innerText = text;
		let buttons = document.createElement('span');
		buttons.innerHTML = del+edit;
	
		item.appendChild(buttons);
	
		item.addEventListener('click', completeItem);
	}
}

function editItem(e, it) {
	e.stopPropagation();
	let item = it.parentNode.parentNode;
	let item_copy = item;
	let list = item.parentNode;
	let text = item.innerText;
	item.removeEventListener('click', completeItem);
	item.innerHTML = '<input type="text" id="editor" onkeypress="editor(event, this)" value="'+text+'">';
}

function addItem(text) {
	let list = document.getElementById('todo');
	let item = document.createElement('li');
	item.innerText = text;
	
	let buttons = document.createElement('span');
	buttons.innerHTML = del+edit;
	
	item.appendChild(buttons);
	
	item.addEventListener('click', completeItem);
	
	list.insertBefore(item, list.childNodes[0]);
}
