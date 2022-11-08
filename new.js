let input = document.querySelector('#todo')
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');

btn.addEventListener('click', () => {
    let txt = input.value;
    if (txt === "") {
        alert('Please write something to do!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = txt;
        list.insertBefore(li, list.childNodes[0]);
        input.value = '';

        const delBtn = document.createElement("i");
        li.appendChild(delBtn);

        delBtn.addEventListener('click', e => {
            li.parentNode.removeChild(li);
        }) 
    }
})


list.addEventListener('click', e => {
    if(e.target.tagName == 'LI') {
        e.target.classList.toggle('checked');
    }
})



 <div class="todoList">
            <h1>To-do List</h1>
            <div class="add-element">
                <input type="text" id="todo" placeholder="Add new to-do">
                <button id="btn">Add</button>
            </div>
    
            <div class="element-list">
                <ul id="list"></ul>
            </div>
        </div>  