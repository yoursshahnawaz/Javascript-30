const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const clearBtn = document.querySelector('.clear-btn');
const checkAll = document.querySelector('.check-all');
const uncheckAll = document.querySelector('.uncheck-all');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
	e.preventDefault();
	const text = this.querySelector('[name=item]').value;
	const item = {
		text,
		done: false
	};
	items.push(item);
	populateList(items, itemsList);
	localStorage.setItem('items', JSON.stringify(items));
	this.reset();
}

function populateList(plates = [], plateList) {
	plateList.innerHTML = plates
		.map((plate, i) => {
			return `
        <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
        </li>
        `;
		})
		.join('');
}

function toggleDone(e) {
	if (!e.target.matches('input')) return;
	const el = e.target;
	const index = el.dataset.index;
	items[index].done = !items[index].done;
	localStorage.setItem('items', JSON.stringify(items));
	populateList(items, itemsList);
}

function clearAll(e) {
	for (var item in items) delete items[item];
	localStorage.clear();
	populateList(items, itemsList);
}

function uncheckItems(e) {
	let item = e.target.dataset.index;
	for (item in items) {
		items[item].done = false;
		populateList(items, itemsList);
		localStorage.setItem('items', JSON.stringify(items));
	}
}

function checkItems(e) {
	let item = e.target.dataset.index;
	for (item in items) {
		items[item].done = true;
		populateList(items, itemsList);
		localStorage.setItem('items', JSON.stringify(items));
	}
}

clearBtn.addEventListener('click', clearAll);
checkAll.addEventListener('click', checkItems);
uncheckAll.addEventListener('click', uncheckItems);
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);
