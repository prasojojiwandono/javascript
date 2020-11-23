var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event 
form.addEventListener('submit',addItem);

// delete event 
itemList.addEventListener('click',removeItem);

// filter event 
filter.addEventListener('keyup',filterItems);

function addItem(e){
    e.preventDefault();
    

    // get input value 
    var newItem = document.getElementById('item').value;

    // create new element 
    var li = document.createElement('li');
    var deleteBtn = document.createElement('button');
    
    // add class 
    li.className = 'list-group-item';
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

    deleteBtn.appendChild(document.createTextNode('X'));
    
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(deleteBtn);


    itemList.appendChild(li);
}

function removeItem(e){
    if (e.target.classList.contains('delete')){
        if (confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    // convert to lower case 
    var text = e.target.value.toLowerCase();

    // get lis 
    var items = itemList.getElementsByTagName('li');

    // convert to Array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });


}