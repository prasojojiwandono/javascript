// console.dir(document);


// // examine
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document);
// console.log(document.forms[0][1]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);


// // get element by id
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'hello juga';
// headerTitle.innerHTML = '<h2>hello juga lagi</h2>';
// headerTitle.innerText = 'hahaha';
// header.style.borderBottom = 'solid 3px #000';


// // get elements by classname
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }



// // get element by tag 
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello 2li';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';


// for(var i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = '#25bcda';
// }


// // query selector
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'hello aja';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'Send';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color ='green';


// // query selector all
// var titles = document.querySelectorAll('.title');
// console.log(titles);

// titles[0].textContent = 'helo lagi';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i=0; i< odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }



//// parent and child

// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// console.log(itemList.parentElement);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// // console.log(itemList.childNodes);// tidak direkomendasikan
// console.log(itemList.children);
// itemList.children[1].style.backgroundColor = 'yellow';
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'hahahaha';
// console.log(itemList.lastElementChild);



// // sibling
// var itemList = document.querySelector('#items');
// console.log(itemList.nextElementSibling);
// console.log(itemList.previousElementSibling);
// console.log(itemList.previousSibling);




// // create element
// var newDiv = document.createElement('div');
// newDiv.className = 'hello';
// newDiv.id = 'hello1';
// newDiv.setAttribute('title','hello Div');

// var newDivText = document.createTextNode('hello world');

// newDiv.appendChild(newDivText);
// console.log(newDiv);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// newDiv.style.fontSize ='30px'
// container.insertBefore(newDiv,h1);





// // events
// var button = document.getElementById('button').addEventListener('click',buttonclick);

// function buttonclick(e){
//     document.getElementById('header-title').textContent = 'changed';
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.className);
//     console.log(e.target.classList);
    
    var output = document.getElementById('output');
//     output.innerHTML = '<h3>'+e.target.id+'</h3>';

//     console.log(e.type);
//     console.log(e.clientX);
//     console.log(e.clientY);
//     console.log(e.offsetX);
//     console.log(e.offsetY);
//     console.log(e.altKey);
//     console.log(e.shiftKey);
//     console.log(e.ctrlKey);

// }


var button = document.getElementById('button');

// button.addEventListener('click',runEvent);
// button.addEventListener('dblclick',runEvent);
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent);

var box = document.getElementById('box');
// box.addEventListener('mouseenter',runEvent);
// box.addEventListener('mouseleave',runEvent);
// box.addEventListener('mouseover',runEvent);
// box.addEventListener('mouseout',runEvent);
// box.addEventListener('mousemove',runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
// itemInput.addEventListener('keydown',runEvent);
// itemInput.addEventListener('keyup',runEvent);
// itemInput.addEventListener('keypress',runEvent);
// itemInput.addEventListener('focus',runEvent);
// itemInput.addEventListener('blur',runEvent);
// itemInput.addEventListener('cut',runEvent);
// itemInput.addEventListener('paste',runEvent);
// itemInput.addEventListener('input',runEvent);

var select = document.querySelector('select');
select.addEventListener('change', runEvent);

form.addEventListener('submit', runEvent);



function runEvent(e){
    e.preventDefault();
    console.log('Event Type : '+e.type);
    output.innerHTML = '<h3>'+e.target.value+'</h3>';
    // output.innerHTML = '<h3>mouseX: '+e.offsetX+' </h3><h3>mouseY :'+
    //         e.offsetY+'</h3>';
    // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",60)"
    // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",60)"

}

